import express from "express";
import {PORT} from "@repo/common/config"

const app = express();

app.get("/",(req,res)=>{
     res.json({
        message:"hello"
    })
})

// const PORT=300

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})