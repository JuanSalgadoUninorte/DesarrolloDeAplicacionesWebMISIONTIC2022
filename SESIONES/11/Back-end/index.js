const express = require("express");
const app = express();
const { Jugadores } = require("./Jugadores");
const { jugadorModelo } = require("./modelo/jugadorModelo");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
//importo la librería para que se trabajen entre servidores externos

const { jugadorRutas } = require("./rutas/jugadorRutas");
app.use("/jugadores", jugadorRutas);//<-prefijo

const { usuarioRutas } = require("./rutas/usuarioRutas");
app.use("/usuario", usuarioRutas);//<-

require("dotenv").config();

//Conexión a DB en MongoDB
mongoose.connect("mongodb://localhost:27017/colombia")
.then(res=>console.log("¡ESTOY CONECTADO A LA DB!"))
.catch(err=>console.log("¡ERROR!", err))
//Conexión a DB en MongoDB

app.get("/", function(req, res) {
    res.send("hoy es viernes");
});

app.get("/jugadores/:Nombre", function (req, res) {
    //se necesita un iterable para "mapear" un objeto de un JSON
    const variable = Jugadores.find(j=>j.Nombre === req.params.Nombre);
    //         es como un ciclo^             ^aquí va el parámetro a buscar
                                            // ^ Se debe asegurar de que este exista 
                                            //  Luego se ejecuta la búsqueda, compara y sale el resultado
    res.send(variable);
} );

//especificar el puerto desde donde se trabajará
app.listen(8081, function () {
    console.log("Mi aplicación corre en el puerto 8081");
});