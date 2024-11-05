import { Hono } from 'hono'

const app = new Hono()

//we can get both request and resposne from this "c"
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
