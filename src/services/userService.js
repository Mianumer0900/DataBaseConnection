import pool from "../config/db.js";

export const getUsersById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users WHERE id=$1", [id]);
    console.log(result);
    return result.rowCount === 1 ? result.rows[0] : null;
    //  if (result.rowCount === 1) {
    //   return result.rows[0];
    // } else {
    //   return null;
    // }
  } catch (error) {
    console.error("Error Fetching User", error);
    throw error;
  } finally {
    client.release();
  }
};

export const getAllUsersServices = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    console.error("Error Fetching Users", error);
    throw error;
  } finally {
    client.release();
  }
};

export const createUserService = async (userData) => {
  const client = await pool.connect();
  try {
    const { name, email } = userData;

    const result = await client.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const deleteUserByIDservices = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error Fetching Users", error);
    throw error;
  } finally {
    client.release();
  }
};

export const updateUserIDServices = async (id, userData) => {
  const client = await pool.connect();
  try {
    const { name, email } = userData;
    const result = await client.query(
      "UPDATE users SET name=$1 , email=$2 WHERE id=$3 RETURNING *",
      [name, email, id]
    );
    console.log(result);
    return result.rowCount === 1 ? result.rows[0] : null;
  } catch (error) {
    console.error("User Updating Error", error);
    throw error;
  } finally {
    client.release();
  }
};
