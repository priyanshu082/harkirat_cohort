import pool from "./db.js";

async function createEntry() {
    try {
        const queryTodo="INSERT INTO todos (title , description,user_id ,done) VALUES ($1,$2,$3,$4) RETURNING id"

        const todoValue=[" cohort ","do the lecture of week 12 learn postgresSQL", 6,false]

        const resultTodo=await pool.query(queryTodo,todoValue)
        
        console.log("New todo created:", resultTodo.rows[0]);

    } catch (error) {
        
        console.error("Error creating user:", error);
        throw error;

    }finally{
        pool.end()
    }
}

createEntry();
