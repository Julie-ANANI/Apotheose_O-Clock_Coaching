require('dotenv').config();


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const router = require('./app/router');

app.use(express.json());
app.use(cors());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:8080', 'https://quill-aop-project.eddi.xyz', 'http://localhost:3000');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/v1/api/', router);

app.listen(PORT, () => {
    console.log(`Server running on : localhost:${PORT}/v1`)
});
