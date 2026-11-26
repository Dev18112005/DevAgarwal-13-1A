const router = require('express').Router();
const Order = require('../models/Order');
const { auth, sellerOnly } = require('../middleware/auth');
router.get('/my-orders', auth, async (req, res) => {
  try { res.json(await Order.find({ user: req.user._id }).sort({ createdAt: -1 })); }
  catch (e) { res.status(500).json({ message: e.message }); }
});
router.get('/', auth, sellerOnly, async (_req, res) => {
  try { res.json(await Order.find().populate('user', 'name email').sort({ createdAt: -1 })); }
  catch (e) { res.status(500).json({ message: e.message }); }
});
router.patch('/:id/status', auth, sellerOnly, async (req, res) => {
  const allowed = ['Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
  if (!allowed.includes(req.body.orderStatus)) return res.status(400).json({ message: 'Invalid order status' });
  const order = await Order.findByIdAndUpdate(req.params.id, { orderStatus: req.body.orderStatus }, { new: true });
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
});
module.exports = router;
