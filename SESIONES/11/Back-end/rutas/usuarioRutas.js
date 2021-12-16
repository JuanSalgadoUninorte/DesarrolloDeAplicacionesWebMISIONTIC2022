const { Router } = require("express");
const usuarioRutas = Router();
const { usuarioModelo } = require("../modelo/usuarioModelo");
const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

usuarioRutas.post("/logIn", async function (req, res) {
    try {
        //capturar la información del cliente
        const { usuario, password } = req.body;
        console.log(usuario);
        //busco en la base de datos la info
        const user = await usuarioModelo.findOne({ usuario });
        console.log(user);
        //pregunto si existe (Sí, verifico su contraseña)
        if (!user) {
            return res.status(401).send({ estado: "ERROR", msg: "Credenciales no validas" });
        }
        //comprobar Password
        const passOK = compare(password, user.password);
        if (passOK) {
            const token = sign({usuario : user.usuario, rol : user.rol}, process.env.JWT_SECRET_KEY);
            return res.status(200).send({ estado: "OK", msg: "Usuario Logueado" });
        }
        else {
            return res.status(401).send({ estado: "ERROR", msg: "Credenciales no validas" });
        }
    } catch (error) {
        console.log(error);
    }

});
usuarioRutas.post("/guardar", function(req, res){
    const dato =req.body;
    
    const user = new UsuarioModelo(dato);
    user.save(function(error){
        console.log(user);
        if(error){
            return res.status(401).send({ estado: "ERROR", msg: "Usuario no creado" });
        }return res.status(401).send({ estado: "ERROR", msg: "Usuario creado" });
    })
    
});
exports.usuarioRutas = usuarioRutas;