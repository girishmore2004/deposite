// routes/users.js

const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');
const { getUserBalance } = require('../controllers/userController');

router.post('/', createUser);

module.exports = router;

router.get('/:userId/balance', getUserBalance);

module.exports = router;
