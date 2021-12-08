const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const jugadorModelo = new Schema(
    {
        nombre: { type: "string", unique: true, required: true},

        dorsal: { type: "string", required: true},
        
        posicion: { type: "string", required: true}
    }
);
//Modelo para base de datos => Guarda un esquema "formato" para poder ingresar la colección
module.exports = mongoose.model("Jugadores", jugadorModelo);
//Crear un esquema