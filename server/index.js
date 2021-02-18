'use strict'
const path = require('path');
const exp = require('express');
const app = exp();
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth-router')
const http = require('http').createServer(app);
const io = require('socket.io')(http,{
    //serveClient: false,
    // // below are engine.IO options
    // pingInterval: 10000,
    // pingTimeout: 5000,
    // cookie: false
    cors: {
        origin: "http://localhost:4200",
        //methods: ["GET", "POST"],
        credentials: true
    }
  });
//const io = require('socket.io')(http);
//variables
const apiPath = '/chat'
const port = 3000;
const url = `http://localhost:${port}${apiPath}`;


//controllers
const chatController = require('./controllers/chat-controller');

//services
const chatService = require('./services/chat-service');

//CORS
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

const chat = io
    .of('/chat')
    .on('connection', function (socket) {
        chatController.respond(socket, chat, chatService);
    });


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
//Routes
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