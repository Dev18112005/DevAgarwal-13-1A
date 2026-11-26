
const express = require('express');
const app = express();

app.use(express.json());

// Sample product data
let products = [
    { id: 1, name: 'Laptop', price: 50000, description: 'High performance laptop' },
    { id: 2, name: 'Mobile', price: 20000, description: 'Android smartphone' }
];

// CREATE - Add a new product
app.post('/products', (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };

    products.push(product);
    res.status(201).json(product);
});

// READ - Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// READ - Get product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
        return res.status(404).send('Product not found');
    }

    res.json(product);
});

// UPDATE - Update product by ID
app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
        return res.status(404).send('Product not found');
    }

    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;

    res.json(product);
});

// DELETE - Delete product by ID
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    products = products.filter(p => p.id != id);

    res.send('Product deleted successfully');
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
