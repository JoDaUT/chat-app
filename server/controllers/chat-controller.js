const { createConversation, appendMessageToConversation, createMessage } = require('../db/database');
const { Contact } = require('../Models/Contact');
const { ConversationModel } = require('../Models/Conversation');
const User = require('../Models/user');
const chatService = require('../services/chat-service');

module.exports.respond = function (socket, io) {

    console.log('user conected ' + socket.id);

    socket.on('user', userInfo => {
        if (userInfo) {
            socket.emit('get users', chatService.getArrayOfAllUsers().filter((value) => value.socketId !== socket.id));

            const userConnected = new Contact(userInfo);
            userConnected.socketId = socket.id;

            chatService.addUser(new User(socket.id, userConnected));
            console.log('user registered: ', chatService.getUserById(socket.id).socketId);
            socket.broadcast.emit('user connect', chatService.getUserById(socket.id));
            socket.emit('get my user', chatService.getUserById(socket.id));

        }
    })
    socket.on('req get my user', () => {
        socket.emit('res get my user', chatService.getUserById(socket.id))
    })
    socket.on('req get users', () => {
        socket.emit('res get users', chatService.getArrayOfAllUsers().filter((value) => value.socketId !== socket.id));
    })
    socket.on('disconnect', () => {
        console.log('user disconnected ' + socket.id);
        socket.broadcast.emit('user disconnect', chatService.getUserById(socket.id));;
        chatService.removeUser(socket.id);
    })
    socket.on('chat message', msg => {
        socket.broadcast.emit('chat message', chatService.getUserById(socket.id), msg);
        console.log(chatService.getUserById(socket.id));
    })
    socket.on('focus', () => {
        socket.broadcast.emit('is typing', chatService.getUserById(socket.id));
    })
    socket.on('blur', () => {
        socket.broadcast.emit('stop typing', chatService.getUserById(socket.id));
    })
    socket.on("emit private message", async (receiverId, msg) => {
        //guardar mensaje en conversacion
        const myUser = chatService.getUserById(socket.id);
        if (myUser) {
            const uid = myUser.data.uid;

            const receiverContact = chatService.getUserById(receiverId);
            if (receiverContact) {
                const receiverContactUid = receiverContact.data.uid;

                const { content, type } = msg

                const receiverMessage = createMessage(content, 0);
                const senderMessage = createMessage(content, 1);

                const result = await ConversationModel.findOne({ uid, contactuid:receiverContactUid })
                if (result) {
                    appendMessageToConversation(result, senderMessage)
                }
                else {
                    const newConversation = createConversation(uid, receiverContactUid);
                    appendMessageToConversation(newConversation, senderMessage)
                }

                //save receiver conversation
                const receiverConversation = await ConversationModel.findOne({uid:receiverContactUid, contactuid:uid});
                if(receiverConversation){//append new message to existing conversation
                    appendMessageToConversation(receiverConversation, receiverMessage)
                }
                else{///create conversation
                    const newConversation = createConversation(receiverContactUid,uid);
                    appendMessageToConversation(newConversation, receiverMessage)
                }
            }
            else {
                throw new Error('Receiver not registered')
            }
        }
        else {
            throw new Error('User not registered')
        }

        socket.to(receiverId).emit("receive private message", { socketId: socket.id, msg });
    })
    socket.on('private focus', (receiverId) => {
        console.log(socket.id + "entro a focus para: " + receiverId);
        socket.to(receiverId).emit('private is typing', chatService.getUserById(socket.id));
    })
    socket.on('private blur', (receiverId) => {
        console.log(socket.id + "entro a blur para: " + receiverId);
        socket.to(receiverId).emit('private stop typing', chatService.getUserById(socket.id));
    })
    socket.on('end call', (receiverId) => {
        socket.to(receiverId).emit('end call signal', socket.id);
    })
    socket.on('send call request', (info) => {
        const { senderInfo, callOptions, receiverId } = info;
        socket.to(receiverId).emit('listen call request', { senderInfo, callOptions });
    })
    socket.on('send call answer', (info) => {
        const { callAllowed, receiverId } = info;
        socket.to(receiverId).emit('listen call answer', callAllowed);
    })
};