export function GestionCultivos(props) {
    return (<div key={props.IdCultivo}>
        <div>
          ID Cultivo: {props.IdCultivo}
        </div>
        <div>
          Nombre: {props.Nombre}
        </div>
        <div>
          Descripción: {props.Descripcion}
        </div>
      </div>);
}