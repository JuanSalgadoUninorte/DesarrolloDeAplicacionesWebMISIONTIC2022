//Este es un componente
export function Jugadores(props) {
    return (<div key={props.Nombre}>
        {/*Aquí va el elemento clave, el diferenciador*/}
        <div>
          <img src={props.imagen} />
        </div>
        <div>
          Nombre: {props.Nombre}
        </div>
        <div>
          # Camiseta: {props.Camiseta}
        </div>
        <div>
          Goles errados: {props.GolesErrados}
        </div>
        <div>
          Pases errados: {props.PasesErrados}
        </div>
      </div>);
}