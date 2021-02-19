class ChatService{
    constructor(capacity){
        this.capacity = capacity;
        this.users = new Map();
    }
    getArrayOfAllUsers(){
        return Array.from(this.users.values());
    }
    getUserById(socketId){
        return this.users.get(socketId);
    }
    addUser(user){
        if(this.capacity && this.users.size < this.capacity){
            this.users.set(user.socketId, user);
            return true;
        }
        else{
            return false;
        }   
    };
    removeUser(socketId){
       return this.users.delete(socketId);
    }
    updateUser(user){
        const result = this.removeUser(user.socketId);
        if(result){
            if(this.addUser(user)){
                return true;
            }
        }
    }
}
const capacity = 100;
module.exports = new ChatService(capacity);