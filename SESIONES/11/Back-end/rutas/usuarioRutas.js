const { Router } = require("express");
const usuarioRutas = Router();
const { usuarioModelo } = require("../modelo/usuarioModelo");
const { compare } = require("bcrypt");

usuarioRutas.post("/logIn", async function (req, res) {
    try {
        //capturar la información del cliente
        const { Usuario, password } = req.body;
        console.log(Usuario);
        //busco en la base de datos la info
        const user = await usuarioModelo.findOne({ Usuario });
        console.log(user);
        //pregunto si existe (Sí, verifico su contraseña)
        if (!user) {
            return res.status(401).send({ estado: "ERROR", msg: "Credenciales no validas" });
        }
        //comprobar Password
        const passOK = compare(password, user.Password);
        if (passOK) {
            return res.status(200).send({ estado: "OK", msg: "Usuario Logueado" });
        }
        else {
            return res.status(401).send({ estado: "ERROR", msg: "Credenciales no validas" });
        }
    } catch (error) {
        console.log(error);
    }

});
//$2y$10$taHWJQH/AoLVNmH8JtaaheTeAPPOSQPEyannSVdVmvJ13GBbtHDUO
exports.usuarioRutas = usuarioRutas;