require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./router');

app.use('/v1',router);

app.listen(port, () => {
    console.log('Server running on : localhost etc')});