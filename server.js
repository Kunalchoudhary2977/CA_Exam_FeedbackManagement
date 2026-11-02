const express =require('express');
const app=express()
const router=require("./routers/feedbackrouter")
const connectDB=require("./config/db.js")

app.use(express.json())
app.use("/feedbacks",router)

const startServer = async()=>{
    try{
        await connectDB();
        
    app.listen(3000,()=>{
        console.log("server is running successfully");
    })
    }
    catch(err){
        console.log("server could not start due to error ")
    }
}
startServer();