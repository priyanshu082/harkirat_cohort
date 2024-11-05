import { Hono } from 'hono'

const app = new Hono()

//for writting the middle ware
async function authMiddleware(c:any,next:any){
  if(c.req.header("Authorization")){
    console.log("before")
    await next();
    console.log("after")
  } else{
    console.log("before") 
    await next();
    console.log("after")
    return c.text("You dont have acess")
  }
}

// app.use(authMiddleware)

app.get('/',authMiddleware, async (c) => {
  // const body = await c.req.json()
  // console.log("C----->>>>>",c.req.query("param"));
  // console.log("C----->>>>>",body);
  // console.log("Headers------>>>>>",c.req.header("Authorization"));
  // console.log("Methods------>>>>>",c.method);
  // console.log("URL------>>>>>",c.req.query("param"));
  return c.text('Hello Hono!')
})

export default app