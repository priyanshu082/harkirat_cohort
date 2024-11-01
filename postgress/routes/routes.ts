import express, { Request, Response } from 'express';
import pool from '../db.js';

const router = express.Router();

// Example route to fetch all users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM priyanshu');
    res.json(result.rows); // Use .rows instead of .columns to get the data
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;