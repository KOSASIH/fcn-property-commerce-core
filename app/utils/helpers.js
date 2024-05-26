const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require('moment');

// Generate a random UUID
exports.generateUUID = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Hash a password using bcrypt
exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Verify a password using bcrypt
exports.verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Generate a JSON Web Token (JWT)
exports.generateToken = (payload, secretKey, expiresIn) => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

// Verify a JSON Web Token (JWT)
exports.verifyToken = (token, secretKey) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};

// Format a date using moment.js
exports.formatDate = (date, format) => {
  return moment(date).format(format);
};

// Paginate an array of data
exports.paginate = (data, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return data.slice(startIndex, endIndex);
};

// Extract pagination metadata from a query
exports.extractPaginationMetadata = (query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 10;
  return { page, limit };
};

// Sanitize user input data
exports.sanitizeInput = (data) => {
  return Object.keys(data).reduce((acc, key) => {
    acc[key] = data[key].trim();
    return acc;
  }, {});
};

// Validate an email address
exports.validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Validate a phone number
exports.validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phoneNumber);
};

module.exports = exports;
