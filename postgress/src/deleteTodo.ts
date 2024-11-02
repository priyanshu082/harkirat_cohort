import pool from "./db.js";


async function deleteTodo(todoId:number){
    try {
        const query = "DELETE FROM todos WHERE id = $1";
        const result =await pool.query(query,[todoId])
        console.log(result)
    } catch (error) {
        console.log("there was error" , error)
    }
   
}

deleteTodo(1) 