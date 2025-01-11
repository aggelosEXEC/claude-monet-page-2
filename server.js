// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// Import the combined routes
const routes = require('./routes/index'); // Ensure the path is correct

// For debug
console.log("DEBUG: MONGO_URI is:", process.env.MONGO_URI);

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connection established!"))
  .catch(err => console.error("MongoDB connection error:", err));

// Use the combined routes, mounted under /api
app.use('/api', routes);

// Serve static front-end files.
// If your front end is in `public/`, this is already set correctly.
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for any non-API path
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
