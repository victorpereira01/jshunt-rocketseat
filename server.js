const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    { useNewUrlParser: true }
);

requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
