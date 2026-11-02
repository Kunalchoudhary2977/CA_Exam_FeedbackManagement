const Feedback=require("../models/Feedback");
const connectDB=require("../config/db");
const getFeedback=async(req,res)=>{
    try{
        const feedbacks=await Feedback.create({
            studentName:req.body.studentName,
            courseName:req.body.courseName,
            message:req.body.message,
            rating:req.body.rating
        })
        res.status(201).json({
            message:"feedback submitted successfully",
            feedbacks:feedbacks
        })
    }
    catch(err){
        res.status(500).json({
            message:"error in submitting the feedback"
        })
    }
}
//i am not clear with patch , so i'm using put.
const updateFeedback=async()=>{
    try{
        const id=req.params.id;
        const newFeedback= req.body;
        const feedback= await findByIdAndUpdate(id,newFeedback,{
            message:feedback   
        })
        if(!feedback){
            res.status(404).json({
                message:"feedback not found"
            })  
        }
        res.status(200).json({
            message:"updated successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message:"error in updating the feedback"
        })
    }
}

module.exports={getFeedback, updateFeedback};