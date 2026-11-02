const express=require("express")
const router=express.Router()

const {getFeedback,updateFeedback}=require("../controllers/feedbackController")

router.post("/",getFeedback)
router.put("/:id",updateFeedback)

module.exports=router;