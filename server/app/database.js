require('dotenv').config();

const { Pool } = require('pg');

// For heroku deployment
const pool = new Pool({
connectionString: process.env.DATABASE_URL,
ssl: {
rejectUnauthorized: false
 	}
});

module.exports = pool;
