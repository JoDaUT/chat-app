const User = require('../Models/user');
const auth = require('../services/auth')
module.exports.respond = function (socket, io, chatService) {
    
        console.log('user conected ' + socket.id);
        
        // socket.on('user-info', userInfo=>{
        //     console.log('userInfo',userInfo);
        // })
        // socket.on('auth', tokenId=>{
        //     console.log('token: ', tokenId);
        // })
        socket.on('token-access', async token=>{
            const user = await auth.login(token).catch( err=>{console.log('ERROR: ',err)});
            if(user){
                console.log('result: ',user);
            }
        })
        socket.on('nickname', nickname => {
            const user = new User(socket.id, nickname);
            chatService.addUser(user);
            socket.broadcast.emit('user connect', chatService.getUserById(socket.id));
            socket.emit('get my user', user);
            socket.emit('get users', chatService.getArrayOfAllUsers());

            // console.log('chat service: ',chatService);
            console.log('user with nickname: ', chatService.getUserById(socket.id));
            // console.log('users: ',chatService.getArrayOfAllUsers());
        })
        socket.on('disconnect', () => {
            console.log('user disconnected ' + socket.id);
            socket.broadcast.emit('user disconnect', chatService.getUserById(socket.id));;
            chatService.removeUser(socket.id);
        })
        socket.on('chat message', msg => {

            socket.broadcast.emit('chat message', chatService.getUserById(socket.id), msg);
            console.log(chatService.getUserById(socket.id));
            console.log(msg);
        })
        socket.on('focus', () => {
            socket.broadcast.emit('is typing', chatService.getUserById(socket.id));
        })
        socket.on('blur', () => {
            socket.broadcast.emit('stop typing', chatService.getUserById(socket.id));
        })
        socket.on("private message", (receiverId, msg) => {
            socket.to(receiverId).emit("private message", socket.id, msg);
        })
        socket.on('private focus', (receiverId) => {
            console.log(socket.id + "entro a focus para: " + receiverId);

            socket.to(receiverId).emit('private is typing', chatService.getUserById(socket.id));
        })
        socket.on('private blur', (receiverId) => {
            console.log(socket.id + "entro a blur para: " + receiverId);

            socket.to(receiverId).emit('private stop typing', chatService.getUserById(socket.id));
        })
};