const mongoose = require('mongoose');
const createSchema = require('./utils');

const userSchema = createSchema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
});
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
