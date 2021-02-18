class ChatService{
    constructor(capacity){
        this.capacity = capacity;
        this.users = new Map();
    }
    getArrayOfAllUsers(){
        return Array.from(this.users.values());
    }
    getUserById(id){
        return this.users.get(id);
    }
    addUser(user){
        if(this.capacity && this.users.size < this.capacity){
            this.users.set(user.id, user);
            return true;
        }
        else{
            return false;
        }   
    };
    removeUser(id){
       return this.users.delete(id);
    }
    updateUser(user){
        const result = this.removeUser(user.id);
        if(result){
            if(this.addUser(user)){
                return true;
            }
        }
    }
}
const capacity = 10;
module.exports = new ChatService(capacity);