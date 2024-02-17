require('dotenv').config();
const mongoose = require('mongoose');
const userSchema = require('../models/user');
const pino = require('pino');
const logger = pino();
const DB_URL = process.env.DB_URL;

mongoose.Promise = global.Promise;

module.exports = async () => {
  await mongoose
    .connect(DB_URL)
    .then(() => {
      logger.info({ success: true, message: 'Connection to DB established!' });
    })
    .catch((error) => {
      logger.info({ success: false, message: error.message });
    });
};
