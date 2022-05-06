// DATABASE CONNECTOR - connects to SQL movies database

const mysql = require("mysql2");

exports.connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "movies"
});

exports.connection.connect((err) => {
  if (err) {
    console.log(err);
  }
});
