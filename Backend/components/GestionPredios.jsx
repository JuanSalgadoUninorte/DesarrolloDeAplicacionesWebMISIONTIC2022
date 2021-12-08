export function GestionPredios(props) {
    return (<div key={props.IdPredio}>
        <div>
          ID Predio: {props.IdPredio}
        </div>
        <div>
          ID Propietario: {props.IdPropietario}
        </div>
        <div>
          CantHectareas: {props.CantHectareas}
        </div>
        <div>
          Ubicacion: {props.Ubicacion}
        </div>
        <div>
          Latitud: {props.Latitud}
        </div>
        <div>
          Longitud: {props.Longitud}
        </div>
      </div>);
}