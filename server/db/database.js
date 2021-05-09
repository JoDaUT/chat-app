const {ConversationModel} = require("../Models/Conversation")
const createConversation = (uid='', receiverContactUid='')=>{
    const newConversation = ConversationModel({ uid, contactuid: receiverContactUid, messages: [] });
    newConversation.save(function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Create Conversation: Success: ')
        }
    });
    return newConversation;
}

const appendMessageToConversation = (conversation, message)=>{
    conversation.messages.push(message)
    conversation.save(function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Append Message To Conversation: Success')
        }
    })
}

const createMessage = (content = '', type=Number)=>{
    return {
        content,
        date: new Date().toISOString(),
        type
    }
}
module.exports = {
    createConversation,
    appendMessageToConversation,
    createMessage
}