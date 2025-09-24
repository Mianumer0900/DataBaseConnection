import pool from "../config/db.js";

// const createUserService = async (userData) => {
//   const client = await pool.connect();

//   try {
//     const { name, email } = userData;

//     const result = await client.query(
//       "INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *"[name, email]
//     );

//     return result.rows[0];
//   } catch (error) {
//     console.log("Error Creating User");
//     throw error;
//   } finally {
//     client.release;
//   }
// };

// export default createUserService;


const createUserService = async (userData) => {
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


export default createUserService;