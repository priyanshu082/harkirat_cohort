import pool from "./db.js";


async function updateTodo(todoId:number){
    try {
        const query = "UPDATE todos SET done = $1 WHERE id = $2";
        const result =await pool.query(query,[false,todoId])
        console.log(result)
    } catch (error) {
        console.log("there was error" , error)
    }
   
}

updateTodo(1)