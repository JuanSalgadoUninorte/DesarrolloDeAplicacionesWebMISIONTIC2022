const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const jugadorSchema = new Schema(
    {
        Nombre: { type: "string", unique: true, required: true},

        Dorsal: { type: "number", required: true},
        
        Posicion: { type: "string", required: true}
    }
);
//Modelo para base de datos => Guarda un esquema "formato" para poder ingresar la colección
// module.exports = mongoose.model("Jugadores", jugadorModelo);
//Crear un esquema
const jugadorModelo = mongoose.model("jugadores", jugadorSchema);
exports.jugadorModelo = jugadorModelo;