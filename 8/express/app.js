const express = require('express');
const app = express();

// Set EJS as template engine
app.set('view engine', 'ejs');

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Route 1: Home page (GET)
app.get('/', (req, res) => {
    res.render('index');
});

// Route 2: About page (GET)
app.get('/about', (req, res) => {
    res.render('about');
});

// Route 3: Contact form (GET)
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route 4: Form submission (POST)
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.render('result', {
        name: name,
        email: email
    });
});

// Route 5: Student details (GET)
app.get('/student', (req, res) => {
    res.render('student', {
        name: 'Dev',
        course: 'MCA',
        college: 'GLA University'
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});