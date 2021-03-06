const pg = require("pg");
require("dotenv").config();

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;

const client = new pg.Client({
  connectionString: connectionString || process.env.DATABASE_URL,
});

client.connect();

module.exports = client;
