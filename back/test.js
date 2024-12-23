//const express = require('express'); //El import pero en backend kekekek
import express from 'express';
//const cors = require('cors');
import cors from 'cors';
import DBClient from '../config/dbClient.js';
import Config from '../config/config.js';

const app = express();
const port = 3001;

let algos = [];

//Cargar configuración
const config = new Config().getConfig();
const urlDB = config.urlDB.replace('<db_password>', config.passDB).replace('<database>', config.dbName).replace('<db_user>', config.userDB);
//Cargar conexión a base de datos MondongoDB
const dbClient = new DBClient('algos', urlDB);


//#region (nos la pela)
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json(
    {type: "*/*"}
));

app.use(cors());
//#endregion

app.get('/test', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
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