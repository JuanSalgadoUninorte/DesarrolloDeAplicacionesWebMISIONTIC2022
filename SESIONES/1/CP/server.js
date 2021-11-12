//permite comunicarse, por medio de la ruta completa de mi archivo,
// define la ruta física de al lugar de dirección
//dirname, coje toda la rura del archivo (linea 11)
const path = require("path");
const express = require("express");//el framework con el que trabajaremos
const bodyParser = require("body-parser");//aseguramos de que la respuesta sea a JSON
//app contiene express "el framework"
const app = express();

app.use(bodyParser.json());
//API REST del home, renderiza la página del home
//parámetros de arrow function: 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
//req -> Es lo que se trae desde el front, solo visualiza
//res -> Es lo que envía como respuesta -> respondemos con un JSON
//función de la 13, más masticadita
// function name(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// }
//obtengo datos
app.post("/add", (req, res) => {
    //obtengo los datos para luego ser procesados del html
    //los datos enviados del html
    const { a, b } = req.body;
    //ahora proceso un json
    res.send({
        //parseo los datos de string a int
        result: parseInt(a) + parseInt(b)
    });
    console.log(result)
});
//3° api, muestro qué api mostrará las cosas
app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});