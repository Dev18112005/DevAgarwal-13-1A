
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Product data
let products = [
    { id: 1, name: 'Laptop', price: 50000, rating: 4.5 },
    { id: 2, name: 'Mobile', price: 20000, rating: 4.2 },
    { id: 3, name: 'Headphones', price: 2500, rating: 4.0 }
];

// API to get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// API to add a new product
app.post('/api/products', (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: Number(req.body.price),
        rating: Number(req.body.rating)
    };

    products.push(product);
    res.status(201).json(product);
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
