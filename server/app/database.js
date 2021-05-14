require('dotenv').config();

const { Pool } = require('pg');

// For heroku deployment
// const pool = new Pool({
// 	connectionString: process.env.DATABASE_URL,
// 	ssl: {
// 		rejectUnauthorized: false
// 	}
// });

<<<<<<< HEAD
// // For development
=======
// For development
>>>>>>> 9c4132d7a8306a5ecf6ef3e22b0c01905b4f7f08
const pool = new Pool();

module.exports = pool;


