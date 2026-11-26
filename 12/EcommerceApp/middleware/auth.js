const jwt = require('jsonwebtoken');
const User = require('../models/User');
async function auth(req, res, next) {
  try {
    const token = (req.headers.authorization || '').replace(/^Bearer\\s+/i, '');
    if (!token) return res.status(401).json({ message: 'Login required' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ message: 'Account not found' });
    req.user = user;
    next();
  } catch (e) { res.status(401).json({ message: 'Invalid or expired token' }); }
}
function sellerOnly(req, res, next) {
  if (req.user?.role !== 'seller') return res.status(403).json({ message: 'Seller access required' });
  next();
}
module.exports = { auth, sellerOnly };
