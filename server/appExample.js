const express = require('express');
const connectDB = require('./config/db');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/examples', exampleRoutes);

module.exports = app;
