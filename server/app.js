//const express = require('express'); //El import pero en backend kekekek
import express from 'express';
//const cors = require('cors');
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import DBClient from './config/dbClient.js';
import Config from './config/Config.js';

const app = express();
let algos = [];
let port = 3001;
let host = "http://localhost";
//Cargar configuración
const config = new Config().getConfig().backend;
const configDB = config.database
console.log(configDB);
const urlDB = configDB.url.replace('<db_password>', configDB.pass).replace('<database>', configDB.db).replace('<db_user>', configDB.user);
//Cargar conexión a base de datos MondongoDB
const dbClient = new DBClient('algos', urlDB);

//Cargar datos del host
port = config.port;
host = config.url;

//#region (nos la pela)
app.use(
    express.urlencoded({
        extended: true
    })
)

// Configure CORS EXAMPLE
app.use(cors());
/*
const corsOptions = {
  origin: 'http://localhost:3000', // Permitir solicitudes desde http://localhost:3000
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
*/

// Configure Proxy EXAMPLE
/*
app.use('/proxy', createProxyMiddleware({
  target: 'https://dlnk.one',
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': ''
  },
}));*/

app.use(express.json(
    {type: "*/*"}
));

//#endregion

app.get('/test', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening at ${host}:${port}`);
});

//Enviar info al backend
app.post('/algo', (req, res) => {    
    //console.log(req.body);
    algos.push(req.body);


    const dbAlgos = dbClient.db;
    dbAlgos.insertOne(req.body);


    res.send(JSON.stringify(algos));
    console.log(algos)
});

//Devolver info desde backend
app.get('/algo', (req, res) => {    
    console.log("Devuelto");
    res.send(JSON.stringify(algos));
});