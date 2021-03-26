const User = require('../Models/user');
const chatService = require('../services/chat-service');

module.exports.respond = function (socket, io) {

    console.log('user conected ' + socket.id);

    socket.on('user', user => {
        if (user) {
            socket.emit('get users', chatService.getArrayOfAllUsers().filter( (value)=>value.socketId !== socket.id));
            chatService.addUser(new User(socket.id, user))
            console.log('user registered: ', chatService.getUserById(socket.id).socketId);
            socket.broadcast.emit('user connect', chatService.getUserById(socket.id));
            socket.emit('get my user', chatService.getUserById(socket.id));
            
        }
    })
    socket.on('req get my user', ()=>{
        socket.emit('res get my user', chatService.getUserById(socket.id))
    })
    socket.on('req get users',()=>{
        console.log('req get users');
        socket.emit('res get users', chatService.getArrayOfAllUsers().filter( (value)=>value.socketId !== socket.id));
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
    socket.on("emit private message", (receiverId, msg) => {
        console.log('msg to send: ', msg, 'to: ',receiverId);
        socket.to(receiverId).emit("receive private message", {socketId: socket.id, msg});
    })
    socket.on('private focus', (receiverId) => {
        console.log(socket.id + "entro a focus para: " + receiverId);

        socket.to(receiverId).emit('private is typing', chatService.getUserById(socket.id));
    })
    socket.on('private blur', (receiverId) => {
        console.log(socket.id + "entro a blur para: " + receiverId);

        socket.to(receiverId).emit('private stop typing', chatService.getUserById(socket.id));
    })
    socket.on('end call', (receiverId)=>{
        console.log(`from: ${socket.id} to:${receiverId}`);
        socket.to(receiverId).emit('end call signal', socket.id);
    })
    socket.on('send call request', (info)=>{
        const{senderInfo, callOptions, receiverId} = info;
        console.log('send call request:', {senderInfo, callOptions, receiverId});
        socket.to(receiverId).emit('listen call request', {senderInfo, callOptions});
    })
    socket.on('send call answer', (info)=>{
        const{callAllowed, receiverId} = info;
        socket.to(receiverId).emit('listen call answer', callAllowed);
    })
};