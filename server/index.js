require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./app/router');

// ***Parsing JSON request bodies***
// Express doesn't parse HTTP request bodies by default, but it does have a built-in middleware
// that populates the req.body property with the parsed request body. For example, app.use(express.json())
// is how you tell Express to automatically parse JSON request bodies for you
app.use(express.json());

// ***CORS***
// En production, il est fréquent d'utiliser le même serveur pour servir l'application React et
// l'API sous-jacente. Dans cette configuration, le mécanisme de Cross-origin resource sharing (CORS),
// basé sur des headers HTTP, n'a pas à être implémenté.
// Middleware can be plugged into the express app in the Node server to allow these cross-site requests.
// Done manually, this typically looks like the following.
// This code could get some sort of config flag around it for production, or better still, get removed for
// production. In production, after all, we’ll be serving up the React app from the Node server and client
// requests can be made to endpoints without a servername: /api/foo_endpoint.
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/v1', router);

app.listen(port, () => {
    console.log('Server running on : localhost:3000/v1')
});
