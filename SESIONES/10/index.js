"use strict" 
const http = require("http");
const op = require("./operaciones");
console.log(op.suma(22, 55));
//req->Require|| res->response
//el servidor pinta en la cabecera como texto plano
var server = http.createServer(function (req, res) {
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h1>¡Hola hoy es viernes!</h1>");
});
server.listen(8081);