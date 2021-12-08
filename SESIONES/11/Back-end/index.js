const express = require("express");
const app = express();
const { Jugadores } = require("./Jugadores");
const jugadorModelo = require("./modelo/jugadorModelo");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());

//Conexión a DB en MongoDB
mongoose.connect("mongodb://localhost:27017/Jugadores")
.then(res=>console.log("¡ESTOY CONECTADO A LA DB!"))
.catch(err=>console.log("¡ERROR!", err))
//Conexión a DB en MongoDB

app.use(cors());
//importo la librería para que se trabajen entre servidores externos

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

// app.post("/guardar", function (req, res) {
//     const datoNom = req.body.nombre;//^RECUPERO DATOS DEL CLIENTE
//     const datoPos = req.body.posicion;//^RECUPERO DATOS DEL CLIENTE
//     const datoDor = req.body.dorsal;//^RECUPERO DATOS DEL CLIENTE
    
//     var diccionario = {Nombre: datoNom, Posicion: datoPos, Dorsal: datoDor};//CON LOS DATOS CREO UN JSON
//     Jugadores.push(diccionario);//INSERTO EL JSON EN EL ARRAY
//     res.send({status: "OK", msg: "¡Jugador guardado!", Jugadores:Jugadores});//LE RESPONDO AL CLIENTE
//                                                      //^Le muestro que guardó
// });

app.post("/actualizar", function (req, res){
    const datoNom = req.body.nombre;//^RECUPERO DATOS DEL CLIENTE
    const datoPos = req.body.posicion;//^RECUPERO DATOS DEL CLIENTE
    const datoDor = req.body.dorsal;//^RECUPERO DATOS DEL CLIENTE
    var diccionario = {Nombre: datoNom, Posicion: datoPos, Dorsal: datoDor};//CON LOS DATOS CREO UN JSON
    let i = 0;
    for (const k of Jugadores) {
        if(k.Nombre === datoNom){
            Jugadores[i]=diccionario;
            break;
        }
        i++;
    }
    res.send({status: "OK", msg: "¡Jugador actualizado!", Jugadores:Jugadores});//LE RESPONDO AL CLIENTE
});

app.post("/eliminar", function (req, res){
    const datoNom = req.body.nombre;//^RECUPERO DATOS DEL CLIENTE
    //var diccionario = {Nombre: datoNom};CON el DATO CREO UN JSON
    let i = 0;
    for (const k of Jugadores) {
        if(k.Nombre === datoNom){
            Jugadores.splice(i, 1);
            break;
        }
        i++;
    }
    res.send({status: "OK", msg: "¡Jugador eliminado!", Jugadores:Jugadores});//LE RESPONDO AL CLIENTE
});

//Sesion13
app.post("/guardar", function (req, res) {
    const datos = req.body;//recupero datos del front
    const jug = new jugadorModelo(datos);//meto los datos ingresados en el front
    jug.save(function (error) {
        if(error){
            res.send({status: "ERROR", msg: "¡Jugador NO guardado!"});
            return false;
        }
        res.send({status: "OK", msg: "¡Jugador guardado!"});
    });
});
    //     const datoNom = req.body.nombre;//^RECUPERO DATOS DEL CLIENTE
    //     const datoPos = req.body.posicion;//^RECUPERO DATOS DEL CLIENTE
    //     const datoDor = req.body.dorsal;//^RECUPERO DATOS DEL CLIENTE
        
    //     var diccionario = {Nombre: datoNom, Posicion: datoPos, Dorsal: datoDor};//CON LOS DATOS CREO UN JSON
    //     Jugadores.push(diccionario);//INSERTO EL JSON EN EL ARRAY
    //     res.send({status: "OK", msg: "¡Jugador guardado!", Jugadores:Jugadores});//LE RESPONDO AL CLIENTE
    //                                                      //^Le muestro que guardó
    // });


//especificar el puerto desde donde se trabajará
app.listen(8081, function () {
    console.log("Mi aplicación corre en el puerto 8081");
});