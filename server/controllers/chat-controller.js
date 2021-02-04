module.exports.respond = function (socket, io, users, chatService) {
    //io.on('connection', (socket) => {
        console.log('user conected ' + socket.id);
        socket.on('nickname', nickname => {
            const user = { id: socket.id, nickname };
            users.set(socket.id, user);
            socket.broadcast.emit('user connect', users.get(socket.id));
            socket.emit('get my user', user);
            socket.emit('get users', Array.from(users.values()));
        })
        socket.on('disconnect', () => {
            console.log('user disconnected ' + socket.id);
            socket.broadcast.emit('user disconnect', users.get(socket.id));
            users.delete(socket.id);
        })
        socket.on('chat message', msg => {

            socket.broadcast.emit('chat message', users.get(socket.id), msg);
            console.log(users.get(socket.id));
            console.log(msg);
        })
        socket.on('focus', () => {
            socket.broadcast.emit('is typing', users.get(socket.id));
        })
        socket.on('blur', () => {
            socket.broadcast.emit('stop typing', users.get(socket.id));
        })
        socket.on("private message", (receiverId, msg) => {
            socket.to(receiverId).emit("private message", socket.id, msg);
        })
        socket.on('private focus', (receiverId) => {
            console.log(socket.id + "entro a focus para: " + receiverId);

            socket.to(receiverId).emit('private is typing', users.get(socket.id));
        })
        socket.on('private blur', (receiverId) => {
            console.log(socket.id + "entro a blur para: " + receiverId);

            socket.to(receiverId).emit('private stop typing', users.get(socket.id));
        })
};