require('dotenv').config();
const express = require('express');
const { createUser, getUsers, login } = require('../controllers/users');
const userRouter = express.Router();
const ROUTE_BASE_URL = `${process.env.API_PREFIX}/users`;

userRouter.post(`${ROUTE_BASE_URL}/register`, createUser);
userRouter.get(`${ROUTE_BASE_URL}`, getUsers);
userRouter.post(`${ROUTE_BASE_URL}/login`, login);

module.exports = userRouter;
