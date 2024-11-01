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

        const values = [ "priyanshu@gail.com","priyanshu"]; // Hardcoded values
        
        const result = await pool.query(query, values);
        
        console.log("New user created:", result.rows[0]);
        return result.rows[0]; // Return the created user data
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }finally{
        pool.end()
    }
}

createEntry();
