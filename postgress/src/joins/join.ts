import pool from "../db.js";

const getJoinData=async (id:number) => {
    try {
        const joinQuery=`
        SELECT users.*, todos.title ,todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id=$1
    `

    const res=await pool.query(joinQuery,[id])
    console.log(res.rows)
    } catch (error) {
        console.log("error while fetching data", error)
    } finally{
        pool.end()
    }
   
}

getJoinData(1)