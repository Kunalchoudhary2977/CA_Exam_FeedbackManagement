const Feedback=require("../models/Feedback");
const submitFeedback=async(req,res)=>{
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

const updateFeedback=async(req,res)=>{
    try{
        const id=req.params.id;
        const status= req.body.status;
        const feedback= await Feedback.findByIdAndUpdate(id,{status},{
            new:true,
            runValidators:true
        })
        if(!feedback){
           return res.status(404).json({
                message:"feedback not found"
            })  
        }
        res.status(200).json({
            message:"updated successfully",
            feedback:feedback

        })
    }
    catch(err){
        res.status(500).json({
            message:"error in updating the feedback"
        })
    }
}

const getFeedback = async(req,res)=>{
    try{
        const page=Number(req.query.page) || 1
        const limit=2;
        const skipCount=(page-1)*limit
        
        const feedbacks= await Feedback.find()
        .skip(skipCount)
        .limit(limit)

        res.status(200).json({
            feedbacks:feedbacks
        })
    }
    catch(err){
        res.status(500).json({
            message:"error in fetching the feedbacks"
        })
    }
}

module.exports={submitFeedback, updateFeedback,getFeedback};