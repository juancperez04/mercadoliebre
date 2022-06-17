const path = require('path');
const express = require('express');
const server = express();
const port= process.env.PORT || 2020;

server.listen(port, () => console.log("Abriendo el servidor "));

const public = path.resolve(__dirname, './public');

server.use(express.static("public"));

server.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/home.html')))
server.get('/registrarse', (req,res) => res.sendFile(path.resolve(__dirname, './views/registrarse.html')))
server.get('/ingreso', (req,res) => res.sendFile(path.resolve(__dirname, './views/ingreso.html')))

