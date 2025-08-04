const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db.js file lo mongoose connected success");
    }catch(err){
        console.log("mongoose connection error in db.js", err.message);
    }
}

module.exports = connectDB;