export function Usuarios(props) {
    return (<div key={props.Id}>
        <div>
          ID: {props.Id}
        </div>
        <div>
          Nombre: {props.Nombre}
        </div>
        <div>
          Apellido: {props.Apellido}
        </div>
        <div>
          Contraseña: {props.Contrasena}
        </div>
        <div>
          Correo: {props.Correo}
        </div>
        <div>
          Rol: {props.Rol}
        </div>
      </div>);
}