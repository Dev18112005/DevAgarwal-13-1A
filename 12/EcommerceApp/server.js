require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ message: 'API route not found' });
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
connectDB().then(() => app.listen(PORT, () => console.log(`E-commerce server running at http://localhost:${PORT}`)))
  .catch(err => { console.error('Database connection failed:', err.message); process.exit(1); });
