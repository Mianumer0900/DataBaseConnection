import pool from "../config/db.js";

const createBasketTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS basket (
    id SERIAL PRIMARY KEY NOT NULL,
    item VARCHAR(100) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

  const client = await pool.connect();
  try {
    await client.query(query);
  } catch (error) {
    console.error("Error creating user table:", error);
    throw error;
  } finally {
    client.release();
  }
};

export default createBasketTable;
