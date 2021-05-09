const firebase = require('firebase');
const chatService = require('../services/chat-service');
const firebaseConfig = {
    apiKey: "AIzaSyAqNdZSmMQrk3Sw5SZe83e12ipLzgFLl1w",
    authDomain: "chat-app-ac2fe.firebaseapp.com",
    projectId: "chat-app-ac2fe",
    storageBucket: "chat-app-ac2fe.appspot.com",
    messagingSenderId: "380513388976",
    appId: "1:380513388976:web:ee447c53e920915492ae75",
    measurementId: "G-GLPKQJXCWG"
}
const app = firebase.initializeApp(firebaseConfig);

class AuthController {
    login(req, res) {
        const data = req.body;
        const tokenId = data.token;
        const accessToken = data.accessToken;
        const user = data.user;

        if(!tokenId){
            res.status(403).send('token id not defined');
        }
        if(!accessToken){
            res.status(403).send('access token not defined');
        }
        if(!user){
            res.status(403).send('user not defined');
        }
        chatService.addUser(user);
        res.status(200).send(user);      
    }
}
module.exports = new AuthController();