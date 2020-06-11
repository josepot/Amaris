const secrets = require("./secrets");
const { Pool } = require("pg");

const pool = new Pool({
  user: secrets.dbuser,
  host: secrets.dbhost,
  database: secrets.dbdatabase,
  password: secrets.dbPassword,
  port: 5432
});



