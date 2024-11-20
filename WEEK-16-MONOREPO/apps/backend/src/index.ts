import express from "express";

const app = express();

app.get("/",(req,res)=>{
     res.json({
        message:"hello"
    })
})

const PORT=3002

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})