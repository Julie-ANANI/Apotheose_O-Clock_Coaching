require('dotenv').config();

const express = require('express');
const app = express();
// const expressSwagger = require('express-swagger-generator')(app);

const router = require('./app/router');


// Middleware which parses incoming requests with JSON payloads
app.use(express.json());

// Allowing cross-origin requests in development
// if (process.env.NODE_ENV === 'development') {
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
// }


app.use('/v1/api/', router);

module.exports = app;

