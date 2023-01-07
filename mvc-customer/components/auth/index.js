 const express = require('express');
 const router = express.Router();

const authController = require('./authController');

router.get('/', authController.showRegistrationForm);
router.post('/register', authController.register);

module.exports = router;