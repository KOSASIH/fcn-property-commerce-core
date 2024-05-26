// models/user.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  address: {
    type: String
  },
  role: {
    type: String,
    enum: ['admin', 'customer', 'partner', 'driver'],
    default: 'customer'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

userSchema.methods.generateToken = function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.SECRET_KEY, {
    expiresIn: '1h'
  });
  return token;
};

userSchema.methods.comparePassword = function(password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

module.exports = mongoose.model('User', userSchema);
