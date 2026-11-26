const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String, image: String, price: Number, quantity: Number
  }],
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },
  orderStatus: { type: String, enum: ['Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Confirmed' },
  razorpayOrderId: String,
  razorpayPaymentId: String
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);
