class ChatService{
    constructor(capacity){
        this.capacity = capacity;
        this.users = new Map();
    }
    getArrayOfAllUsers(){
        return new Array.from(this.users.values());
    }
    getUserById(id){
        return this.users.get(id);
    }
    addUser(user){
        if(this.users.size < this.capacity){
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
module.exports = new ChatService();