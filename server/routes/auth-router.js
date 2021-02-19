const authController = require('../controllers/auth-controller')
const cors = require('cors');
const express = require('express');
const app = express();
const authRouter = express.Router();

authRouter.post('/login', authController.login);

module.exports = authRouter;