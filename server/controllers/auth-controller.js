const firebase = require('firebase');
const chatService = require('../services/chat-service');
const firebaseConfig = require('../firebase.config.json');
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