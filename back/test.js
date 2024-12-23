//const express = require('express'); //El import pero en backend kekekek
import express from 'express';
//const cors = require('cors');
import cors from 'cors';
import dbClient from '../config/dbClient.js';

const app = express();
const port = 3001;

let algos = [];


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


    const dbAlgos = dbClient.db.collection('algos');
    dbAlgos.insertOne(req.body);


    res.send(JSON.stringify(algos));
    console.log(algos)
});

//Devolver info desde backend
app.get('/algo', (req, res) => {    
    console.log("Devuelto");
    res.send(JSON.stringify(algos));
});