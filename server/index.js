const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const users= new Map();// key: id value: {props: nickname,etc}

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')

});
io.on('connection', (socket)=>{
    console.log('user conected '+socket.id);
    // socket.broadcast.emit('user connect', socket.id);

    socket.on('nickname', nickname=>{
        //console.log(`${nickname}: ${socket.id}`);
        users.set(socket.id, {id:socket.id, nickname});
        socket.broadcast.emit('user connect', users.get(socket.id));
    })
    socket.on('disconnect', ()=>{
        console.log('user disconnected '+socket.id);
        socket.broadcast.emit('user disconnect', users.get(socket.id));
    })
    socket.on('chat message', msg=>{
        
        socket.broadcast.emit('chat message', users.get(socket.id), msg);
        //socket.broadcast.emit('chat message', msg);
        console.log(users.get(socket.id));
        console.log(msg);
        // console.log('message: '+users.get(socket.id)?nickname+":"+msg);
    })
})
http.listen(3000, ()=>{
    console.log('listening on http://localhost:3000');
});