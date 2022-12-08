import bodyParser from "body-parser";
import express from "express";
import pg from "pg";
import { Sequelize } from "sequelize";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
// const pool = new pg.Pool();
const sequelize = new Sequelize();
console.log(process.env);


const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

// app.get("/", async (req, res) => {
//   const { rows } = await pool.query("SELECT NOW()");
//   res.send(`Hello, World! The time from the DB is ${rows[0].now}`);
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
