const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

// Serve artifacts
app.use('/artifacts', express.static('/Users/firas/.gemini/antigravity-ide/brain/e17a8a0b-826e-40b8-88e4-4231a941c94d'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/masterclass')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
