const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')

});
io.on('connection', (socket)=>{
    console.log('user conected '+socket.id);
    socket.broadcast.emit('user connect', socket.id);

    socket.on('nickname', nickname=>{
        console.log(`${nickname}: ${socket.id}`);
    })
    socket.on('disconnect', ()=>{
        console.log('user disconnected '+socket.id);
        socket.broadcast.emit('user disconnect', 'user disconnected '+socket.id);
    })
    socket.on('chat message', msg=>{
        console.log('message: '+msg);
        io.emit('chat message', msg)
    })
})
http.listen(3000, ()=>{
    console.log('listening on http://localhost:3000');
});