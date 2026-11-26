const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { auth } = require('../middleware/auth');

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || password.length < 6) return res.status(400).json({ message: 'Enter name, email and a password of at least 6 characters.' });
    const normalized = email.toLowerCase().trim();
    if (await User.findOne({ email: normalized })) return res.status(409).json({ message: 'Email already registered' });
    // Seller registration is intentionally disabled publicly. Promote a trusted user directly in MongoDB.
    const user = await User.create({ name, email: normalized, password: await bcrypt.hash(password, 10), role: 'customer' });
    res.status(201).json({ message: 'Registered successfully', user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (e) { res.status(500).json({ message: e.message }); }
});
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: String(req.body.email || '').toLowerCase().trim() });
    if (!user || !await bcrypt.compare(req.body.password || '', user.password)) return res.status(401).json({ message: 'Incorrect email or password' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (e) { res.status(500).json({ message: e.message }); }
});
router.get('/me', auth, (req, res) => res.json({ user: req.user }));
module.exports = router;
