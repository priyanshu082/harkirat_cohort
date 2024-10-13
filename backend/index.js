const express= require("express") 
const zod=require("zod")
const jwt=require("jsonwebtoken")

const password="priyanshu"

const schema=zod.array(zod.number());

const app = express()
//this is themiddle used everytime any request is hit on server
//app.use() is to make any middle to run everytime we hit any type of reqest on sever
app.use(express.json()) //to catch body

app.get('/',function(req,res){
res.send("hellooooo")
})

const PORT=8080
let noOfReq=0;

const users=[
    {
        id:1, 
        name:"priyanshu",
        password:"priyanshu",
        email:"priyanshusingh216@gmail.com"
    },
    {
        id:2,
        name:"jai",
        password:"jai",
        email:"jaisingh216@gmail.com"
        },
]


// how to write zod schema 
// {
//     email:string
//     password:atleast 8 characters
//     Country:"IN","US""
// } 

const zodSchema=zod.object({
    email:zod.string(),
    password:zod.string().min(8),
    country:zod.enum(["IN","US"])  
})

const userExist=(username,password)=>{
    let userExist=false;
    for(let i =0;i<users.length;i++){
        if(users[i].name==username && users[i].password==password){
            userExist=true;
            break;
            }     
    }
    return userExist;
}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExist(username,password)){
        res.status(400).json({msg:"Invalid username or password"})
    }
    var token=jwt.sign({username:username},password);
    return res.json(
        {
           token
        }
    )

})

app.get("/getUser",()=>{
    const token=req.headers.authorization;
    
   try{
    const decoded=jwt.verify(token,password)
    const username=decoded.username;
    return res.json({
        users:users
    })
} catch(err){
    return res.status(403).json({
        msf:"Invalid token"
    })
}

return 
})

// we have another middle ware by express for global catches for not letting our server crash 
// this has 4 arguements 
 app.use((err,req,res,next)=>{
         res.json("some problem is there")
 })

app.listen(PORT,()=>{ 
    console.log(`Server is running on ${PORT}`)
})