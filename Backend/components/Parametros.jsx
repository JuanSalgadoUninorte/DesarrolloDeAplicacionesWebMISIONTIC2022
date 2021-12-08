export function Parametros(props) {
    return (<div key={props.IdParametro}>
        <div>
          ID Parámetro: {props.IdParametro}
        </div>
        <div>
          ID Cultivo: {props.IdCultivo}
        </div>
        <div>
        Valor de Semilla: {props.ValSemilla}
        </div>
        <div>
        Valor MtCuAgua: {props.ValMtCuAgua}
        </div>
        <div>
        Valor Fertilizante: {props.ValFertilizante}
        </div>
      </div>);
}