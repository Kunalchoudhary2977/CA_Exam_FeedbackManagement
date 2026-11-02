const express =require('express');
const app=express()
const router=require("./routers/feedbackrouter")
app.use("/feedbacks",router)


app.listen(300,()=>{
    console.log("server is running successfully")
})
