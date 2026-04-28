import mysql from "mysql2/promise.js";

const pool = mysql.createPool({
  host: "localhost",       
  user: "root",            
  password: "",            
  database: "authenticationdb",
  port: 3307               
});

export default pool;