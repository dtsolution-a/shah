import { Router } from 'express';
import db from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// GET all settings (protected, as key-value pairs)
router.get('/', authenticateToken, (req, res) => {
  try {
    const list = db.prepare('SELECT * FROM settings').all();
    const settingsObj = {};
    list.forEach(item => {
      settingsObj[item.key] = item.value;
    });
    res.json(settingsObj);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE settings (protected)
router.put('/', authenticateToken, (req, res) => {
  try {
    const settings = req.body; // Expects object e.g. { indiamart_link: '...' }
    if (!settings || typeof settings !== 'object') {
      return res.status(400).json({ error: 'Settings object is required.' });
    }

    const stmt = db.prepare('INSERT OR REPLACE INTO settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)');
    
    const transaction = db.transaction((settingsObj) => {
      for (const [key, value] of Object.entries(settingsObj)) {
        stmt.run(key, String(value));
      }
    });

    transaction(settings);
    res.json({ message: 'Settings updated successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
