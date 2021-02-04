'use strict'

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http,{
    serveClient: true,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
  });

//controllers
const controller = require('./controllers/chat-controller');

//services
const chatService = require('./services/chat-service');


const users = new Map();// key: id value: {props: nickname,etc}

const chat = io
    .of('/chat')
    .on('connection', function (socket) {
        controller.respond(socket, chat, users, chatService);
    });

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});



http.listen(3000, () => {
    console.log('listening on http://localhost:3000/chat');
});