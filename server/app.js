require('dotenv').config();

const express = require('express');
const app = express();

const expressSwagger = require('express-swagger-generator')(app);
const PORT = process.env.PORT || 3000;


const router = require('./app/router');

let options = {
    swaggerDefinition: {

        info: {
            description: 'A coaching REST API',
            title: 'Coaching',
            version: '1.0.0',
        },
        host: `localhost:${PORT}`,
        basePath: '/v1/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: [
        './app/router.js',
        './app/models/*.js'
    ] //Path to the API handle folder
};

expressSwagger(options);
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