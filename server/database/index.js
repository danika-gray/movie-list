const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "movies"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});