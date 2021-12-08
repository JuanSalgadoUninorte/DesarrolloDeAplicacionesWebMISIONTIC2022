import { useState } from "react";
import { Jugadores } from './Jugadores';


export default function App() { 
  const jugadores = [
  {"imagen": "https://strikers.futbol/__export/1637619547574/sites/strikers/img/2021/11/22/disexo_sin_txtulo_-_2021-11-22t191853_428.png_1301049368.png", 
  "Nombre": "Duvan Zapata",
  "Camiseta": "8",
  "GolesErrados": 99,
  "PasesErrados": 99},
  {"imagen": "https://strikers.futbol/__export/1637619547574/sites/strikers/img/2021/11/22/disexo_sin_txtulo_-_2021-11-22t191853_428.png_1301049368.png", 
  "Nombre": "James Rodríguez",
  "Camiseta": "10",
  "GolesErrados": 99,
  "PasesErrados": 99},
  {"imagen": "https://futbolete.com/wp-content/uploads/2021/06/mina-min-1200x900.jpg", 
  "Nombre": "Jerry Mina",
  "Camiseta": "13",
  "GolesErrados": 8,
  "PasesErrados": 99},
  {"imagen": "https://strikers.futbol/__export/1637619547574/sites/strikers/img/2021/11/22/disexo_sin_txtulo_-_2021-11-22t191853_428.png_1301049368.png", 
  "Nombre": "Gustavo Cuellar",
  "Camiseta": "3",
  "GolesErrados": 99,
  "PasesErrados": 99},
  {"imagen": "https://strikers.futbol/__export/1637619547574/sites/strikers/img/2021/11/22/disexo_sin_txtulo_-_2021-11-22t191853_428.png_1301049368.png", 
  "Nombre": "Radamel Falcao",
  "Camiseta": "7",
  "GolesErrados": 99,
  "PasesErrados": 99}];
  //Hook->se desempaquetan los datos
  const [listaJugador, setListaJugador] = useState(jugadores);
  const [listaJugador, setListaJugador] = useState(jugadores);
  const [listaJugador, setListaJugador] = useState(jugadores);
  const [listaJugador, setListaJugador] = useState(jugadores);
  const [listaJugador, setListaJugador] = useState(jugadores);
  //busqueda 
  //                                                          !Filter pide que ambos estén iguales
  //filtro sobre el vector                                                                        Includes es la condición
  const buscarJugador = (evento)=>{setListaJugador(jugadores.filter(a=>a.Nombre.toLowerCase().includes(evento.target.value.toLowerCase())))}
  //                      ^recibe un parámetro
  //                                  ^modifica el contenido de lista jugador "Filtra con lo que cumple el filtro que a su vez cumpla con la caja de texto"
  //Se va a activar cada que se escribe algo
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-6">
          <input type="text" className="form-control" placeholder="Nombre del jugador" onChange={buscarJugador} />
      {listaJugador.map(a=>
      <Jugadores
        imagen = {a.imagen}
        Nombre = {a.Nombre}
        Camiseta = {a.Camiseta}
        GolesErrados = {a.GolesErrados}
        PasesErrados = {a.PasesErrados} />
      )}
    </div>
          </div>
        </div>
      </div>

      
  );
}