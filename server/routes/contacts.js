import { Router } from 'express';
import db from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// POST - Public contact form submission
router.post('/', (req, res) => {
  const { name, email, phone, company, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const result = db.prepare(`
    INSERT INTO contacts (name, email, phone, company, subject, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(name, email, phone || '', company || '', subject || '', message);

  res.status(201).json({ id: result.lastInsertRowid, message: 'Thank you for your enquiry. We will get back to you shortly.' });
});

// GET all contacts (protected)
router.get('/', authenticateToken, (req, res) => {
  const { is_read } = req.query;
  let contacts;
  if (is_read !== undefined) {
    contacts = db.prepare('SELECT * FROM contacts WHERE is_read = ? ORDER BY created_at DESC').all(Number(is_read));
  } else {
    contacts = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();
  }
  res.json(contacts);
});

// GET single contact
router.get('/:id', authenticateToken, (req, res) => {
  const contact = db.prepare('SELECT * FROM contacts WHERE id = ?').get(req.params.id);
  if (!contact) return res.status(404).json({ error: 'Contact not found.' });
  // Mark as read
  db.prepare('UPDATE contacts SET is_read = 1 WHERE id = ?').run(req.params.id);
  res.json(contact);
});

// DELETE contact
router.delete('/:id', authenticateToken, (req, res) => {
  const contact = db.prepare('SELECT id FROM contacts WHERE id = ?').get(req.params.id);
  if (!contact) return res.status(404).json({ error: 'Contact not found.' });

  db.prepare('DELETE FROM contacts WHERE id = ?').run(req.params.id);
  res.json({ message: 'Contact deleted successfully.' });
});

// Mark as read/unread
router.patch('/:id/read', authenticateToken, (req, res) => {
  const { is_read } = req.body;
  const contact = db.prepare('SELECT id FROM contacts WHERE id = ?').get(req.params.id);
  if (!contact) return res.status(404).json({ error: 'Contact not found.' });

  db.prepare('UPDATE contacts SET is_read = ? WHERE id = ?').run(is_read ? 1 : 0, req.params.id);
  res.json({ message: 'Updated successfully.' });
});

export default router;