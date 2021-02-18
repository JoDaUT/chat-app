const User = require('../Models/user')
class Auth{
    login(token){
        return new Promise( (resolve, reject)=>{
            if(token){
                resolve(new User(token, 'david'));
            }
            else{
                reject('token invalido: ',token);
            }
        })
    }
    logout(){}
}
module.exports = new Auth();