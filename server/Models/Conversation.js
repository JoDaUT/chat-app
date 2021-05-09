const {Schema, model} = require('mongoose');
const {MessageSchema, MessageModel } = require('./Message');
const ConversationSchema = new Schema({
    uid: {type:String, required:true},
    contactuid:{type:String, required:true},
    messages:{type:[MessageSchema]}
})
const ConversationModel = model('Conversation', ConversationSchema);
module.exports = {
    ConversationModel,
    ConversationSchema
}

