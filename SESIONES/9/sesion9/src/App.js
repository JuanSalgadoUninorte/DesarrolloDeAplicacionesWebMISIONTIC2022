import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Jugadores } from './components/Jugadores';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Fragment>
      <Jugadores />
    </Fragment>
  );
}

export default App;
