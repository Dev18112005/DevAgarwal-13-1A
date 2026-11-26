
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ProductDB')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Create Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// CREATE - Add a new product
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ - Get all products
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// READ - Get product by ID
app.get('/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product)
        return res.status(404).send('Product not found');

    res.json(product);
});

// UPDATE - Update product by ID
app.put('/products/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!product)
        return res.status(404).send('Product not found');

    res.json(product);
});

// DELETE - Delete product by ID
app.delete('/products/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product)
        return res.status(404).send('Product not found');

    res.send('Product deleted successfully');
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
