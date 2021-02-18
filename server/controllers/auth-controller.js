const firebase = require('firebase');
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
        console.log('heelo hello');
        const tokenId = req.body;
        console.log('tokenId: ', { tokenId });
        const credentials = firebase.auth.GoogleAuthProvider.credential(tokenId);
        firebase.auth().signInWithCredential(credential).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
            res.status(403).send({errorCode, errorMessage, email, credential});
        })
        res.send(credentials);
    }
}
module.exports = new AuthController();