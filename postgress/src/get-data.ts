import pool from "./db.js";

async function getUserData(){
    try {
    const query = "SELECT email FROM users";
    const result = await pool.query(query);
    console.log(result.rows)
    return result.rows;
    } catch (error) {
        console.error("Error getting user:", error);
        throw error;
    } finally{
        pool.end();
    }
    
}
async function getTodoData(id:number){
    try {
    const query = "SELECT * FROM todos WHERE user_id = $1";
    const result = await pool.query(query,[id]);
    console.log(`Todos for user Id: ${id}`)
    for(let todo of result.rows){
        console.log(`ID : ${todo.id} , Title : ${todo.title} , Description : ${todo.description} , Done : ${todo.done}`)
    }
    return result.rows;
    } catch (error) {
        console.error("Error getting Todo:", error);
        throw error;
    } finally{
        pool.end();
    }
    
}
    

getTodoData(6)