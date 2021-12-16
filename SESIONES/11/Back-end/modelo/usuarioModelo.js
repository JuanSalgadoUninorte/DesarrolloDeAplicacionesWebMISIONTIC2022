const { genSalt, hash } = require('bcrypt');
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const usuarioSchema = new Schema(
    {
        usuario: { type: "string", unique: true, required: true, max: 100},

        password: { type: "string", required: true},
        
        rol: { type: "string", required: true}
    }
);
usuarioSchema.pre("save", async function(next){
    const salt = await genSalt(10);
    console.log(salt);
    this.password = await hash(this.password, salt)
    console.log(this.password);
    next()
});
//Modelo para base de datos => Guarda un esquema "formato" para poder ingresar la colección
// module.exports = mongoose.model("Jugadores", usuarioModelo);
//Crear un esquema
const usuarioModelo = mongoose.model("usuarios", usuarioSchema);
exports.usuarioModelo = usuarioModelo;