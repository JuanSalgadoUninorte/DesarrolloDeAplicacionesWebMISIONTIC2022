import { useRef, useState } from "react";

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
        const j = {nombreJugador:nom, camisetaJugador:num, posicion:pos };
        listadoJugador.push(j);
        console.log(listadoJugador);
        localStorage.setItem("listadoJugador", JSON.stringify(listadoJugador));
    }

    return (
        <>
            <form>
                <label htmlFor="">Nombre de jugador</label>
                <input type="text" className="form-control" ref={nombreJugador} />
                <label htmlFor="">Posición</label>
                <input type="text" className="form-control" ref={posicion} />
                <label htmlFor="">Número de camiseta</label>{/* con el ref se concatena el valor que va tener la caja, referenciado a las variables de arriba*/}
                <input type="text" className="form-control" ref={camisetaJugador} />
                <div className="col-auto">
                    <button type="button" className="btn btn-primary mb-3 m-2 mt-3" onClick={guardar}>Guardar</button>
                    <button type="button" className="btn btn-primary mb-3 m-2 mt-3">Listar</button>
                </div>
            </form>
        </>
    );
}