const { response, request } = require('express');
const { ConversationModel } = require('../Models/Conversation');
const {admin} = require('../config/firebase.config')

const authenticateUserByToken = (tokenAccess)=>{
    return new Promise( (resolve, reject)=>{
        admin
        .auth()
        .verifyIdToken(tokenAccess)
        .then((decodedToken) => {
            const uid = decodedToken.uid;
            resolve(uid)
        })
        .catch((error) => {
            reject(error)
        });
    })
}

class ConversationController {
    async getConversation(req = request, res = response) {
        const tokenAccess = req.header('token-access')
        try{
            const uid = await authenticateUserByToken(tokenAccess)//.catch( err=>console.log(err))
            if(uid){
                const { contactUid } = req.params;
        
                const conversation = await ConversationModel.findOne({ uid, contactuid: contactUid })
                if(conversation){
                    const messages = conversation.messages;
                    if(messages){
                        res.json(messages)
                    }
                    else{
                        res.json([])
                    }
                }
                else{
                    const messages = []
                    res.json(messages)
                }
            }
            else{
            }
        }
        catch(error){
            res.status(401).json({error:'invalid credential'});
        }
    }
}

const conversationController = new ConversationController();
module.exports = conversationController;