import pool from "../config/db.js";

export const getItemsByIDServices = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM basket WHERE id=$1", [id]);
    console.log(result);
    return result.rowCount === 1 ? result.rows[0] : null;
  } catch (error) {
    console.error("Error Fetching basket", error);
    throw error;
  } finally {
    client.release();
  }
};

export const getAllItemsServices = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM basket");
    return result.rows;
  } catch (error) {
    console.error("Error Fetching basket", error);
    throw error;
  } finally {
    client.release();
  }
};

export const createItemServices = async (basketData) => {
  const client = await pool.connect();
  try {
    const { item, quantity } = basketData;

    const result = await client.query(
      "INSERT INTO basket (item, quantity) VALUES ($1, $2) RETURNING *",
      [item, quantity]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating Item:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const deleteItemIDServices = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "DELETE FROM basket WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error Fetching basket", error);
    throw error;
  } finally {
    client.release();
  }
};

export const updateItemsIDServices = async (id, basketData) => {
  const client = await pool.connect();
  try {
    const { item, quantity } = basketData;
    const result = await client.query(
      "UPDATE basket SET item=$1 , quantity=$2 WHERE id=$3 RETURNING *",
      [item, quantity, id]
    );
    console.log(result);
    return result.rowCount === 1 ? result.rows[0] : null;
  } catch (error) {
    console.error("Basket Updating Error", error);
    throw error;
  } finally {
    client.release();
  }
};
