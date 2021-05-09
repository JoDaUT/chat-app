'use strict'
const path = require('path');
const cors = require('cors');

const exp = require('express');
const app = exp();
const bodyParser = require('body-parser');
require('dotenv').config();


const {dbConnection} = require('./db/db.config')
//routes
const conversationRouter = require('./routes/conversation-router')
const authRouter = require('./routes/auth-router')
const {admin} = require('./config/firebase.config')
const main = async()=>{
    await dbConnection();
    
    const http = require('http').createServer(app);
    const io = require('socket.io')(http,{
        cors: {
            origin: process.env.ORIGIN,
            //credentials: true
        }
      });
    
    //variables
    const apiPath = '/chat'
    const port = process.env.PORT;
    const url = `${process.env.URL}:${port}${apiPath}`;
    
    
    //controllers
    const chatController = require('./controllers/chat-controller');
    
    //services
    app.use('/', cors(), authRouter);
    app.use('/conversation', cors(), conversationRouter)

    const chat = io
        .of('/chat')
        .on('connection', function (socket) {
            chatController.respond(socket, chat);
        });
    
    
    //middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    
    
    //Routes
    
    
    //NO BORRAR
    
    // app.use(exp.static(path.join(__dirname, 'public', 'dist','chat-app-client')));
    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'public', 'dist', 'chat-app-client', 'index.html'));
    // });
    app.get('/', (req,res)=>{
        res.send('sucess');
    })
    
    http.listen(port, () => {
        console.log(`listening on ${url}`);
    });
}

main();