var jugadores = [];//Vector para tomar las cajas de texto y guardarlo
const guardar = () => {
    let doc = document.getElementById("doc").value;
    let nomb = document.getElementById("nomb").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    var diccionario = {};
    diccionario.documento=doc;//Es igual a 123 : 123
    //diccionario.documento=doc;
    //                        ^especifíco el valor(Variable) 
    //            ^especifíco el nombre de la clave                             
    //documento = 123456
    diccionario.nomb=nomb;
    //nombre = Ivan Zapata
    diccionario.tel=tel;
    diccionario.email=email;
    jugadores.push(diccionario);//Le envío el diccionario al arreglo
};
//empezamos a listar
const listar = () => {

    let nombre = document.getElementById("contenido");
    nombre.innerHTML= "";
    for (const j of jugadores) {
        nombre.innerHTML+=`<tr>
        <td>${j.documento}</td>
        <td>${j.nomb}</td>
        <td>${j.tel}</td>
        <td>${j.email}</td>
        </tr>`;
    }
}