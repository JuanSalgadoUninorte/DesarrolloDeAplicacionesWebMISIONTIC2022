const express = require("express");
const app = express();
const { Jugadores } = require("./Jugadores");
const cors = require("cors");
app.use(express.json());

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

app.post("/guardar", function (req, res) {
    const datoNom = req.body.nombre;//^RECUPERO DATOS DEL CLIENTE
    const datoPos = req.body.posicion;//^RECUPERO DATOS DEL CLIENTE
    const datoDor = req.body.dorsal;//^RECUPERO DATOS DEL CLIENTE
    
    var diccionario = {Nombre: datoNom, Posicion: datoPos, Dorsal: datoDor};//CON LOS DATOS CREO UN JSON
    Jugadores.push(diccionario);//INSERTO EL JSON EN EL ARRAY
    res.send({status: "OK", msg: "¡Jugador guardado!", Jugadores:Jugadores});//LE RESPONDO AL CLIENTE
                                                     //^Le muestro que guardó
});

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

//especificar el puerto desde donde se trabajará
app.listen(8081, function () {
    console.log("Mi aplicación corre en el puerto 8081");
});