const {Schema, model} = require("mongoose");

const ContactSchema = new Schema({
    uid:{type:String, required:true},
    title:{type:String, required:true},
    subtitle:{type:String, required:true},
    status:{type:String, required:true},
    avatar:{type:String, required:true},
    socketId:{type:String, required:true}
})
class Contact{
    constructor(contact){
        this.uid = contact.uid;
        this.title = contact.title;
        this.subtitle = contact.subtitle;
        this.status = contact.status;
        this.avatar = contact.avatar;
        this.socketId = contact.socketId;
    }
}
    


const ContactModel = model('Contact', ContactSchema)
module.exports = {
    ContactSchema,
    ContactModel,
    Contact
}