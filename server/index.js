require('dotenv').config();

const fs = require('fs');
const path = require('path');
const https =require('https');
const express = require('express');
const app = express();

/**
 * On récupère notre clé privée et notre certificat (ici ils se trouvent dans le dossier certificate)
 * */
const key = fs.readFileSync(path.join(__dirname,'certificate','server.key'));
const cert = fs.readFileSync(path.join(__dirname,'certificate','server.cert'));
 
const options = {key,cert};

/* Puis on créer notre serveur HTTPS */
https.createServer(options,app).listen(8080,()=>{
    console.log('App is running ! Go to https://localhost:8080');
});

const PORT = process.env.PORT || 3000;

const router = require('./app/router');

app.use(express.json());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/v1/api/', router);

// app.listen(PORT, () => {
//     console.log(`Server running on : localhost:${PORT}/v1`)
// });


/* Puis on créer notre serveur HTTPS */
https.createServer(options,app).listen(PORT,()=>{
          console.log(`App is running ! Go to https://localhost:${PORT}/v1`);
});
