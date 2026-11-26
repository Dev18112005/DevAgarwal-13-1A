const router = require('express').Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Product = require('../models/Product');
const Order = require('../models/Order');
const { auth } = require('../middleware/auth');

function gateway() {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) throw new Error('Razorpay keys are not configured');
  return new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
}
router.post('/create-order', auth, async (req, res) => {
  try {
    const items = req.body.items;
    if (!Array.isArray(items) || !items.length) return res.status(400).json({ message: 'Cart is empty' });
    const normalized = [];
    let total = 0;
    for (const item of items) {
      const product = await Product.findById(item.productId);
      const quantity = Number(item.quantity);
      if (!product || !Number.isInteger(quantity) || quantity < 1) return res.status(400).json({ message: 'Invalid cart item' });
      if (quantity > product.stock) return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      normalized.push({ product: product._id, name: product.name, image: product.image, price: product.price, quantity });
      total += product.price * quantity;
    }
    const rpOrder = await gateway().orders.create({ amount: Math.round(total * 100), currency: 'INR', receipt: `rcpt_${Date.now()}` });
    const order = await Order.create({ user: req.user._id, items: normalized, totalAmount: total, paymentStatus: 'Pending', orderStatus: 'Confirmed', razorpayOrderId: rpOrder.id });
    res.json({ orderId: rpOrder.id, amount: rpOrder.amount, currency: rpOrder.currency, key: process.env.RAZORPAY_KEY_ID, localOrderId: order._id });
  } catch (e) { res.status(500).json({ message: e.message }); }
});
router.post('/verify', auth, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const expected = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');
    if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(razorpay_signature || ''))) return res.status(400).json({ message: 'Payment signature invalid' });
    const order = await Order.findOne({ razorpayOrderId: razorpay_order_id, user: req.user._id });
    if (!order) return res.status(404).json({ message: 'Order record not found' });
    if (order.paymentStatus !== 'Paid') {
      // Reduce stock only after verified payment.
      for (const item of order.items) {
        const updated = await Product.findOneAndUpdate({ _id: item.product, stock: { $gte: item.quantity } }, { $inc: { stock: -item.quantity } });
        if (!updated) return res.status(409).json({ message: `Stock changed for ${item.name}. Please contact support.` });
      }
      order.paymentStatus = 'Paid';
      order.razorpayPaymentId = razorpay_payment_id;
      await order.save();
    }
    res.json({ message: 'Payment verified', orderId: order._id });
  } catch (e) { res.status(500).json({ message: e.message }); }
});
module.exports = router;
