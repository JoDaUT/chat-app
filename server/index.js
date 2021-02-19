'use strict'
const path = require('path');
const exp = require('express');
const app = exp();
const bodyParser = require('body-parser');


const http = require('http').createServer(app);
const io = require('socket.io')(http,{
    //serveClient: false,
    // // below are engine.IO options
    // pingInterval: 10000,
    // pingTimeout: 5000,
    // cookie: false
    cors: {
        origin: "http://localhost:4200",
        credentials: true
    }
  });

//variables
const apiPath = '/chat'
const port = 3000;
const url = `http://localhost:${port}${apiPath}`;


//controllers
const chatController = require('./controllers/chat-controller');

//services
//const chatService = require('./services/chat-service');

const chat = io
    .of('/chat')
    .on('connection', function (socket) {
        chatController.respond(socket, chat);
    });


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


//Routes
const authRouter = require('./routes/auth-router')

const cors = require('cors');
app.use('/', cors(), authRouter);


//app.use(exp.static(path.join(__dirname, 'public', 'dist','chat-app-client')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'dist', 'chat-app-client', 'index.html'));
// });
// app.get('/', (req,res)=>{
//     res.send('sucess');
// })

http.listen(3000, () => {
    console.log(`listening on ${url}`);
});