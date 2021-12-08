import { useRef, useState } from "react";
import { Link } from "react-router-dom";
 
export function Jugadores() {
    const nombreJugador = useRef();
    const posicion = useRef();
    const camisetaJugador = useRef();
    let listadoJugador = [];
    const [alerta, setAlerta] = useState(false);
 
    function guardar() {//Aquí deja tomar los datos de la función ref
        const nom = nombreJugador.current.value;
        const num = camisetaJugador.current.value;
        const pos = posicion.current.value;
        console.log(nom, pos, num);
        const j = { nombreJugador: nom, camisetaJugador: num, posicion: pos };
        //listadoJugador.push(j);
        console.log(listadoJugador);
        listadoJugador = JSON.parse(localStorage.getItem("listadoJugador"))||[];
        listadoJugador.push(j);
        localStorage.setItem("listadoJugador", JSON.stringify(listadoJugador));
        setAlerta(true);
        nombreJugador.current.value = "";
        camisetaJugador.current.value = "";
        posicion.current.value = "";
        //setTimeout(() => setAlerta(false), 3000);
    }

    function consultar(){
        // var nombre = document.getElementById("nom").value;
        var nombre = nombreJugador.current.value;
        //Recupero la caja de texto
        //Ahora me voy a la API
        fetch(`http://localhost:8081/jugadores/${nombre}`)
        //fetch no va con ";"
        //Lo que recupero de la caja de texto ^; fetch, genera una promesa
        //Generamos una cadena de promesas para obtener lo deseados
        .then(res=>res.json())//ahora vamos a cumplir la promesa
        .then(res=>{
            posicion.current.value = res.Posicion;
            camisetaJugador.current.value = res.Dorsal;
    });

    }
 
    return (
        <>
            {alerta && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
            {/* // <div className="alert alert-primary" role="alert">
            //     ¡Jugador almacenado!
            // </div>} */}
            <form>
                <label htmlFor="">Nombre de jugador</label>
                <input type="text" className="form-control" ref={nombreJugador} />
                <label htmlFor="">Posición</label>
                <input type="text" className="form-control" ref={posicion} />
                <label htmlFor="">Número de camiseta</label>{/* con el ref se concatena el valor que va tener la caja, referenciado a las variables de arriba*/}
                <input type="text" className="form-control" ref={camisetaJugador} />
                <div className="col-auto">
                    <button type="button" className="btn btn-primary mb-3 m-2 mt-3" onClick={guardar}>Guardar</button>
                    <Link to="/listado">
                    <button type="button" className="btn btn-primary mb-3 m-2 mt-3">Listar</button>
                    </Link>
                    <button type="button" onClick={consultar} className="btn btn-primary mb-3 m-2 mt-3">Consultar</button>
                </div>
            </form>
        </>
    );
}