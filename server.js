require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// Κάνω import τα routes
const routes = require('./routes/index'); 

console.log("DEBUG: MONGO_URI is:", process.env.MONGO_URI);

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection established!"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use('/api', routes);

// Για τα static front-end αρχεία.
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for any non-API path
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ξεκινάω τον server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
