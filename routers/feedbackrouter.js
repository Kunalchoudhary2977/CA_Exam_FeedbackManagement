const express=require("express")
const router=express.Router()

const {submitFeedback,updateFeedback,getFeedback}=require("../controllers/feedbackController")

router.post("/",submitFeedback)
router.patch("/:id",updateFeedback)
router.get("/",getFeedback)

module.exports=router;