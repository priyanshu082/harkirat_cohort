import pool from "./db.js";

async function createEntry() {
    try {
        const query = `
            INSERT INTO users (email, password)
            VALUES ($1, $2)
            RETURNING *;
        `;

        //we can also do this in this way
        // const query = `
        //     INSERT INTO users (email, password)
        //     VALUES (priyanshu@gmail.com,priyanshu)
        //     RETURNING *;
        // `;
        
        //but there is called SQL INJECTION in which if user from frontend send in gmail priyanshu@gamil.com; DROP TABLE users
        //it will drop the table of users that why we do this thing separately

        const values = [ "prihu@il.com","priyanshu"]; // Hardcoded values
        
        const result = await pool.query(query, values);

        const queryTodo="INSERT INTO todos (title , description,user_id ,done) VALUES ($1,$2,$3,$4) RETURNING id"

        const todoValue=[" cohort ","do the lecture of week 12 learn postgresSQL", result.rows[3].id,false]

        const resultTodo=await pool.query(queryTodo,todoValue)
        
        console.log("New user created:", result.rows[0]);
        console.log("New todo created:", resultTodo.rows[0]);
        return result.rows[0]; // Return the created user data
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }finally{
        pool.end()
    }
}

createEntry();
