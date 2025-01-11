const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Exhibition, Link, User } = require('../public/CombinedModels'); 

const JWT_SECRET = process.env.JWT_SECRET || 'secretKey';

/**
 * ===========================
 * Middleware για την πιστοποίηση 
 * ===========================
 */
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2) {
    return res.status(401).json({ error: 'Token error' });
  }

  const scheme = parts[0];
  const token = parts[1];

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token malformatted' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Token invalid' });
    req.userId = decoded.userId;
    return next();
  });
}

/**
 * ===========================
 * Authentication Routes
 * ===========================
 */

// POST 
router.post('/auth/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Missing username or password' });
    }

    // Έλεχγος για την ύπαρξη του χρήστη
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Κάνουμε hash το password πριν την αποθήκευση
    const hashedPassword = await bcrypt.hash(password, 10);

    // Δημιουργούμε νέο χρήστη
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // Κάνουμε generate το κλειδί JWT
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({ message: 'User created', token, username });
  } catch (err) {
    console.error('Signup Error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Παρόμοιες διαδικασίες για το sign in
router.post('/auth/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    return res.json({ message: 'Sign in successful', token, username: user.username });
  } catch (err) {
    console.error('Signin Error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

/**
 * ===========================
 * Routes για τις εκθέσεις
 * ===========================
 */

// GET (Δεν χρειάζεται σύνδεση για να τα δούμε)
router.get('/exhibitions', async (req, res) => {
  try {
    const exhibitions = await Exhibition.find();
    res.json(exhibitions);
  } catch (err) {
    console.error('Get Exhibitions Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST (Χρειάζεται sign in)
router.post('/exhibitions', authMiddleware, async (req, res) => {
  try {
    const { title, date, description, category } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const newExhibition = new Exhibition({ title, date, description, category });
    await newExhibition.save();
    res.status(201).json(newExhibition);
  } catch (err) {
    console.error('Create Exhibition Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT (Χρειάζεται sign in)
router.put('/exhibitions/:id', authMiddleware, async (req, res) => {
  try {
    const { title, date, description, category } = req.body;
    const updated = await Exhibition.findByIdAndUpdate(
      req.params.id,
      { title, date, description, category },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Exhibition not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Update Exhibition Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE (Χρειάζεται sign in)
router.delete('/exhibitions/:id', authMiddleware, async (req, res) => {
  try {
    const deleted = await Exhibition.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Exhibition not found' });
    }
    res.json({ message: 'Exhibition deleted' });
  } catch (err) {
    console.error('Delete Exhibition Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * ===========================
 * Routes για τους συνδέσμους
 * ===========================
 */

// GET (Δεν χρειάζεται sign in)
router.get('/links', async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (err) {
    console.error('Get Links Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST (Χρειάζεται sign in)
router.post('/links', authMiddleware, async (req, res) => {
  try {
    const { title, url, description, category } = req.body;
    if (!title || !url) {
      return res.status(400).json({ error: 'Title and URL are required' });
    }
    const newLink = new Link({ title, url, description, category });
    await newLink.save();
    res.status(201).json(newLink);
  } catch (err) {
    console.error('Create Link Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT (Χρειάζεται sign in)
router.put('/links/:id', authMiddleware, async (req, res) => {
  try {
    const { title, url, description, category } = req.body;
    const updated = await Link.findByIdAndUpdate(
      req.params.id,
      { title, url, description, category },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Link not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Update Link Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE (Χρειάζεται sign in)
router.delete('/links/:id', authMiddleware, async (req, res) => {
  try {
    const deleted = await Link.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Link not found' });
    }
    res.json({ message: 'Link deleted' });
  } catch (err) {
    console.error('Delete Link Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
