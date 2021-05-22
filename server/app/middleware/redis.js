// const session = require('express-session');
// const connectRedis = require('connect-redis');
// const redis = require('./app/session_store');
// const RedisStore = connectRedis(session);

// // This middleware is use to cretad a session

// const middlewareRedis = (req, res, next) => {

    
    
//     // if the user is not connected, we send an error
//     console.log('******creation sesion****');
//     app.use(session({
//         // we pass the Redis store information
//         store: new RedisStore({ 
//             client: redis,
//          }),
//         //resave is used to reset the lifetime of the session with each new request
//         resave: false,
//         //saveUninitialized is used to save the session in the system event if we didn't store any data inside
//         saveUninitialized: true,
//         //secret is used to encrypt  the session identifier placed in the cookie sent to the client
//         secret: process.env.SESSION_SECRET,
//         cookie: {
//             secure: false, // false allow us not to be in https
//             httpOnly: true,
//             maxAge: 1000 * 60 // in milliseconds
//             //10 minutes
//         }
//     }));

   
//     next();
// }

// module.exports = middlewareRedis;