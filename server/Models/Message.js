const {Schema, model} = require('mongoose');

//constructor(public content:string, public date:Date, public type:number){}

const MessageSchema = new Schema({
    content:{type:String, required:true, minLength:1, maxLength: 255},
    date: {type:Date, required:true},
    type: {type:Number, required:true}
})
const MessageModel = model('Message', MessageSchema);
module.exports = {
    MessageModel,
    MessageSchema
}