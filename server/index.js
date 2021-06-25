//config app express.js
import dotenv from 'dotenv'
dotenv.config({ silent: true })
// import logger from 'morgan';
import express from 'express';
const expressSwagger = require('express-swagger-generator')(app);
//indexRouter (router)
import router from './app/router';

const app = express();

// app.use(logger('dev'));

const PORT = process.env.PORT || 3000;

// let options = {
//     swaggerDefinition: {

//         info: {
//             description: 'A coaching REST API',
//             title: 'Coaching',
//             version: '1.0.0',
//         },
//         host: `localhost:${PORT}`,
//         basePath: '/v1/api',
//         produces: [
//             "application/json",
//             "application/xml"
//         ],
//         schemes: ['http', 'https'],
//         securityDefinitions: {
//             JWT: {
//                 type: 'apiKey',
//                 in: 'header',
//                 name: 'Authorization',
//                 description: "",
//             }
//         }
//     },
//     basedir: __dirname, //app absolute path
//     files: [
//         './app/router.js',
//         './app/models/*.js'
//     ] //Path to the API handle folder
// };

// expressSwagger(options);

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

app.listen(PORT, () => {
  console.log(`Server running on : localhost:${PORT}/v1`)
});


export default app;
