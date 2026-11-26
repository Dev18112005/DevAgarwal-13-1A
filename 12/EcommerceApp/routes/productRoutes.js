const router = require('express').Router();
const Product = require('../models/Product');
const { auth, sellerOnly } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const { q, category } = req.query;
    const filter = {};
    if (q) filter.name = { $regex: q, $options: 'i' };
    if (category && category !== 'All') filter.category = category;
    res.json(await Product.find(filter).sort({ createdAt: -1 }));
  } catch (e) { res.status(500).json({ message: e.message }); }
});
router.get('/:id', async (req, res) => {
  try {
    const item = await Product.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Product not found' });
    res.json(item);
  } catch (e) { res.status(400).json({ message: 'Invalid product id' }); }
});
router.post('/', auth, sellerOnly, async (req, res) => {
  try {
    const { name, description, price, category, image, stock } = req.body;
    if (!name || price === undefined || stock === undefined) return res.status(400).json({ message: 'Name, price and stock are required' });
    const item = await Product.create({ name, description, price: Number(price), category, image, stock: Number(stock), seller: req.user._id });
    res.status(201).json(item);
  } catch (e) { res.status(400).json({ message: e.message }); }
});
router.put('/:id', auth, sellerOnly, async (req, res) => {
  try {
    const item = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Product not found' });
    res.json(item);
  } catch (e) { res.status(400).json({ message: e.message }); }
});
router.delete('/:id', auth, sellerOnly, async (req, res) => {
  const item = await Product.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product removed' });
});
module.exports = router;
