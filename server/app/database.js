require('dotenv').config();
<<<<<<< HEAD

=======
>>>>>>> develop
const { Pool } = require('pg');

// For heroku deployment
const pool = new Pool({
<<<<<<< HEAD
connectionString: process.env.DATABASE_URL,
ssl: {
rejectUnauthorized: false
 	}
});

module.exports = pool;
=======
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// For development
// const pool = new Pool({
// });

module.exports = pool;
>>>>>>> develop
