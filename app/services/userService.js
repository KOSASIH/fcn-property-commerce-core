const User = require('../models/user');

// Create a new user
exports.createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

// Find a user by ID
exports.findUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

// Find a user by email
exports.findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

// Update a user
exports.updateUser = async (userId, userData) => {
  const user = await User.findByIdAndUpdate(userId, userData, { new: true });
  return user;
};

// Delete a user
exports.deleteUser = async (userId) => {
  await User.findByIdAndDelete(userId);
};

// List all users
exports.listUsers = async () => {
  const users = await User.find();
  return users;
};
