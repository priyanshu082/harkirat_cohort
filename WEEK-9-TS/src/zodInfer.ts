// while using zod we are doing run time validation
import {z} from 'zod'
import express from 'express'

const app= express()

const userProfileSchema= z.object({
    name: z.string().min(1,{message:"Name cannot be empty"}),
    email: z.string().email({message:"Invalid format"}),
    age: z.number().min(18).optional()
})

type finalSchema=z.infer<typeof userProfileSchema>

app.put("/user",(req,res)=>{
    const {success}=userProfileSchema.safeParse(req.body)
    const updateBody : finalSchema=req.body

    if(!success){
        res.status(401).json({})
        return 
    }

    //update code

    res.json({
        message:"User updated successfully"
    })

})