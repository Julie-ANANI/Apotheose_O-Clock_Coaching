require('dotenv').config();


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
//const session = require('express-session');

const router = require('./app/router');

// Middleware which parses incoming requests with JSON payloads
app.use(express.json());
// app.use(cors());


// Establishing a session system so we can store the info of each user
// Establishing a session system so we can store the info of each user
// app.use(session({
//     //resave is used to reset the lifetime of the session with each new request
//     resave: true,
//     //saveUninitialized is used to save the session in the system event if we didn't store any data inside
//     saveUninitialized: false,
//     //secret is used to encrypt  the session identifier placed in the cookie sent to the client
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//         secure: false, // false allow us not to be in https
//         maxAge: 7200000 // in milliseconds --> 2h
//     }
// }));


// Allowing cross-origin requests in development
// if (process.env.NODE_ENV === 'development') {
    // app.use((request, response, next) => {
    //     response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    //     response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    //     response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    //     next();
    // });
// }

app.use(express.static(path.join(__dirname, '..', 'front', 'dist')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'front', 'dist', 'index.html'));
  });

app.use('/v1/api/', router);

app.listen(PORT, () => {
    console.log(`Server running on : localhost:${PORT}/v1`)
});
