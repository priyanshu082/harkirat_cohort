import pool from "./db.js";
// `` this thing is used to write string in multiple lines
const createUsersTable = `
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;

const createTodoTable = `
  CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    user_id INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
  );
`;

// Create both tables sequentially
pool.query(createUsersTable)
  .then(() => {
    console.log("Users table created");
    return pool.query(createTodoTable);
  })
  .then(() => {
    console.log("Todos table created");
  })
  .catch((error) => {
    console.error("Error creating tables:", error);
  })
  .finally(() => pool.end());