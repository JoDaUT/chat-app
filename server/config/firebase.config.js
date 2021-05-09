// Initialize the default app
const admin = require('firebase-admin');
//const app = admin.initializeApp();

// var admin = require("firebase-admin");

const serviceAccount = require("../chat-app-ac2fe-firebase-adminsdk-hxmlk-2cd607dd05.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = {
    admin
}