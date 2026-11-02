const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect("https://2.1.1.1:27017/feedbackdb") 
        console.log("database connected successfully")

    }
    catch(err){
        res.status(500).send("error in connecting the database");
    }
}
module.exports=connectDB;