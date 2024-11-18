const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register',
  [
    body('username').trim().isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
  ],
  authController.register
);

router.post('/login',
  [
    body('email').isEmail(),
    body('password').exists(),
  ],
  authController.login
);

router.get('/me', auth, authController.getProfile);
router.post('/logout', auth, authController.logout);

module.exports = router;