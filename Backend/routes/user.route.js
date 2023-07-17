const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.model');

// Creating a USER ROUTE 
userRouter.post('/register', async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = {userRouter};
