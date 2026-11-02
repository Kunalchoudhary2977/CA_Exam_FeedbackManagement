const mongoose=require("mongoose");
const FeedbackSchema=new mongoose.Schema({
    StudentName:{
        type:String,
        required:true
    },
    courseName:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})
const Feedback=mongoose.model("Feedback",FeedbackSchema)
module.exports=Feedback;