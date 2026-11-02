const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/feedbackdb"); 
        console.log("database connected successfully")

    }
    catch(err){
       console.log("Database connection failed : ",err);
       throw err;
    }
}
module.exports=connectDB;