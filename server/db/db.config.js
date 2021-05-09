const mongoose = require('mongoose');
const MONGO_CNN = process.env.MONGO_CNN;
const dbConnection = async()=>{
    try{
        await mongoose.connect(MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
            });
        console.log("Database connection established");
    }
    catch( err ){
        throw new Error(err);
    }
}
module.exports = {
    dbConnection
}