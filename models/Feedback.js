const mongoose=require("mongoose");
const FeedbackSchema=new mongoose.Schema({
    studentName:{
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
        required:true,
        min:1,
        max:5
    },
    status:{
        type:"string",
        enum:["Pending","Reviewed"],
        default:"Pending"
    }
})
const Feedback=mongoose.model("Feedback",FeedbackSchema)
module.exports=Feedback;