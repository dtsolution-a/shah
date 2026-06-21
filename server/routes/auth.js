import { Router } from 'express';
import bcrypt from 'bcryptjs';
import db from '../db.js';
import { generateToken, authenticateToken } from '../middleware/auth.js';

const router = Router();

// Seed default admin user if not exists
const seedAdmin = () => {
  db.prepare('DELETE FROM users WHERE username = ?').run('admin');
  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get('shah_adOOPP');
  if (!existing) {
    const hashedPassword = bcrypt.hashSync('shah_adOOPP_pwd_placeholder', 10);
    db.prepare('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)').run(
      'shah_adOOPP', 'admin@shahwebsite.com', hashedPassword, 'admin'
    );
    console.log('Default admin user shah_adOOPP seeded');
  }
};
seedAdmin();

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  if (username === 'shah_adOOPP') {
    // Dynamic password matches HHMMShAh for current IST time (UTC+5:30)
    // We allow a window of ±3 minutes for clock sync
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const isMatched = [-3, -2, -1, 0, 1, 2, 3].some(offset => {
      const t = new Date(now.getTime() + istOffset + offset * 60 * 1000);
      const hh = String(t.getUTCHours()).padStart(2, '0');
      const mm = String(t.getUTCMinutes()).padStart(2, '0');
      const expectedPassword = `${hh}${mm}ShAh`;
      return password === expectedPassword;
    });

    if (isMatched) {
      let user = db.prepare('SELECT * FROM users WHERE username = ?').get('shah_adOOPP');
      if (!user) {
        const dummyHash = bcrypt.hashSync('dummy_dynamic_pwd_never_used', 10);
        db.prepare('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)').run(
          'shah_adOOPP', 'admin@shahwebsite.com', dummyHash, 'admin'
        );
        user = db.prepare('SELECT * FROM users WHERE username = ?').get('shah_adOOPP');
      }

      const token = generateToken(user);
      return res.json({
        token,
        user: { id: user.id, username: user.username, email: user.email, role: user.role }
      });
    }
  }

  // Reject any other user
  return res.status(401).json({ error: 'Invalid credentials.' });
});

// Verify token / get current user
router.get('/me', authenticateToken, (req, res) => {
  const user = db.prepare('SELECT id, username, email, role FROM users WHERE id = ?').get(req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found.' });
  res.json(user);
});

// Change password
router.post('/change-password', authenticateToken, (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  
  if (!bcrypt.compareSync(currentPassword, user.password)) {
    return res.status(400).json({ error: 'Current password is incorrect.' });
  }

  const hashed = bcrypt.hashSync(newPassword, 10);
  db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hashed, req.user.id);
  res.json({ message: 'Password changed successfully.' });
});

export default router;