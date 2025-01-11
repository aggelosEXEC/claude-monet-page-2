const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// ---------------------
// Μοντέλο και δομή για τον χρήστη
// ---------------------

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

// Κάνουμε hash το password του χρήστη πριν την αποθήκευση
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Σύγκριση των passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

// --------------------------
// Μοντέλο και δομή για τις εκθέσεις
// --------------------------

const exhibitionSchema = new mongoose.Schema({
  title:        { type: String, required: true },
  date:         { type: String },        // Προαιρετικ΄ή μοναδική ημερομηνία
  description:  { type: String },
  category:     { type: String },        // Τωρινή ή παλαιότερη έκθεση
  startDate:    { type: String },        // Ημερομηνία έναρξης της έκθεσης
  endDate:      { type: String }         // Ημερομηνία λήξης της έκθεσης
});

const Exhibition = mongoose.model('Exhibition', exhibitionSchema);

// --------------------
// Μοντέλο και δομή για τους συνδέσμους
// --------------------

const linkSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  url:         { type: String, required: true },
  description: { type: String },
  category:    { type: String } // Σύνδεσμοι για σελίδες ή βιβλία
});

const Link = mongoose.model('Link', linkSchema);

// -----------------
// Κάνω export τα μοντέλα
// -----------------

module.exports = {
  User,
  Exhibition,
  Link
};
