import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Jugadores } from './components/Jugadores';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListadoJugadores } from './components/ListadoJugadores';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Comentarios } from './components/Comentarios';
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jugadores />} />
          <Route path="/listado" element={<ListadoJugadores />} />
          <Route path="/comentarios" element={<Comentarios />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;