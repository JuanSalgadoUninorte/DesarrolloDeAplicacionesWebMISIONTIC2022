export function ConfigurarCultivo(props) {
    return (<div key={props.IdConfig}>
        <div>
          ID Configuración: {props.IdConfig}
        </div>
        <div>
          ID Predio: {props.IdPredio}
        </div>
        <div>
          ID Cultivo: {props.IdCultivo}
        </div>
        <div>
          Area Destinada: {props.AreaDestinada}
        </div>
        <div>
          Cantidad Semillas: {props.CantSemillas}
        </div>
        <div>
          TiempCultivo: {props.TiempCultivo}
        </div>
        <div>
        Metro ^3 Agua: {props.MetCubAgua}
        </div>
        <div>
        CatFertilizantes: {props.CatFertilizantes}
        </div>
        <div>
        Tiempo Recoleccion: {props.TiempRecoleccion}
        </div>
        <div>
        Kg Producto: {props.KgProducto}
        </div>
        <div>
        TiemMinEspera: {props.TiemMinEspera}
        </div>
      </div>);
}