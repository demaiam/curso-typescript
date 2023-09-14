import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5000,
  user: "postgres",
  password: "123",
  database: "videogames"
});

export { connection };