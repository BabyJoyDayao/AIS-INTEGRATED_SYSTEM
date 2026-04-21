import mysql from "mysql2/promise.js";

const pool = mysql.createPool({
  host: "localhost",       // usually "localhost" or "127.0.0.1"
  user: "root",            // default XAMPP MySQL user
  password: "",            // leave blank if no password
  database: "authenticationdb",// replace with your actual DB
  port: 3307               // default MySQL port (check XAMPP)
});

export default pool;