require('dotenv').config();

const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const connectRedis = require('connect-redis');
const redis = require('./app/session_store');
// const middlewareRedis = require('./app/middleware/redis');

const userMW = require('./app/middleware/userMW');

// const router_noauthentification = require('./app/router_noauthentification');
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
        // './app/router_noauthentification.js',
        './app/models/*.js'
    ] //Path to the API handle folder
};

expressSwagger(options);


// Middleware which parses incoming requests with JSON payloads
app.use(express.json());

// Passing express session to connect-redis which adds support of Redis
// This initializes the session
const RedisStore = connectRedis(session);

// // Establishing a session system
// // All our requests will now have a new 'session' parameter which automatically matches the session of the client making the request
app.use(session({
    // we pass the Redis store information
    store: new RedisStore({ 
        client: redis,
     }),
    
    //resave is used to reset the lifetime of the session with each new request
    resave: false,
    //saveUninitialized is used to save the session in the system event if we didn't store any data inside
    saveUninitialized: true,
    //secret is used to encrypt  the session identifier placed in the cookie sent to the client
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: false, // false allow us not to be in https
        httpOnly: true,
        key: "sessionID",
        maxAge: 1000 * 60 // in milliseconds
        //10 minutes
    }
}));



app.use(function (req, res, next) {
    if (!req.session) {
        return next(new Error('oh no')) // handle error
    }
    next() // otherwise continue
});

// Middleware which creates a user property in req.session
app.use(userMW);


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
// app.use('/v1/api/', router_noauthentification);


app.listen(PORT, () => {
    console.log(`Server running on : localhost:${PORT}/v1`)
});
