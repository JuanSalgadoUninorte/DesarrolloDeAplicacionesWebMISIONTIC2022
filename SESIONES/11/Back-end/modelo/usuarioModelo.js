const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const usuarioSchema = new Schema(
    {
        Usuario: { type: "string", unique: true, required: true, max: 100},

        Password: { type: "string", required: true},
        
        Rol: { type: "string", required: true}
    }
);
//Modelo para base de datos => Guarda un esquema "formato" para poder ingresar la colección
// module.exports = mongoose.model("Jugadores", usuarioModelo);
//Crear un esquema
const usuarioModelo = mongoose.model("usuarios", usuarioSchema);
exports.usuarioModelo = usuarioModelo;