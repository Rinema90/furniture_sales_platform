// Connection to the database file
// In order to correct an error due to module.exports conflict collision in between connection (app.js and the routes) variable from mysql and the routes file,
const mysql2 = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// process.env is the location from express environment where the config.env file saves the variables declared there
// declaring the object for the mysql connection
const connection = mysql2.createConnection({
  host: process.env.HOST,
  port: process.env.PORT_DB,
  user: process.env.USERNAME_DB,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

// here we stablish the connection
connection.connect((err) => {
  if (err) return console.error(err.message);
  console.log("Connected to the MySQL server.");
});

module.exports = connection;
