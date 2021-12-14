const {Router} = require("express");
const jugadorRutas = Router();
const { jugadorModelo } = require("../modelo/jugadorModelo");

jugadorRutas.post("/guardar", function (req, res) {
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

jugadorRutas.post("/consultar", function (req, res) {
    const {Nombre} = req.body;//recupero datos del front
    jugadorModelo.findOne({Nombre}, function (error, jug) {
        if(error){
            res.send({status: "ERROR", msg: "¡Jugador NO encontrado!"});
            return false;
        }else{
            if(jug!=null){
                res.send({status: "OK", msg: "¡Jugador encontrado!", dato: jug});
                console.log(jug);
            }else{
                res.send({status: "ERROR", msg: "¡Jugador NO encontrado!"});
                return false;
            }
        }
    })
});

jugadorRutas.post("/eliminar", function (req, res){
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

jugadorRutas.post("/actualizar", function (req, res){
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

exports.jugadorRutas = jugadorRutas;