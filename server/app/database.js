require('dotenv').config();

const { Pool } = require('pg');

//For heroku deployment
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
});
 //je suis dans le conflit
// For development
//const pool = new Pool();

module.exports = pool;


