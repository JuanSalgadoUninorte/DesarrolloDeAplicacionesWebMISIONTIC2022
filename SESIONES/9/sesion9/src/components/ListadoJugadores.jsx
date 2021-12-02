export function ListadoJugadores() {
    const listado = JSON.parse(localStorage.getItem('ListadoJugadores'))||[];
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre de jugador</th>
                        <th scope="col">Posición</th>
                        <th scope="col">Número de jugador</th>
                    </tr>
                </thead>
                <tbody>
                    {listado.map(x=>
                    <tr>
                        <th>{x.nombreJugador}</th>
                        <td>{x.posicion}</td>
                        <td>{x.camisetaJugador}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}