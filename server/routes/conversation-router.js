// const authController = require('../controllers/auth-controller')
// const cors = require('cors');
const express = require('express');
// const app = express();
// const authRouter = express.Router();

// authRouter.post('/login', authController.login);

// module.exports = authRouter;

const conversationController = require('../controllers/conversation-controller.js');
const cors = require('cors');

const conversationRouter = express.Router();

conversationRouter.get('/:contactUid', conversationController.getConversation)

module.exports = conversationRouter;