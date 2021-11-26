import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { Actualizable } from './Actualizable';
import Wrapper from './Wrapper';

function App() {
  return (
    <div>
    {/* <Counter /> */}
    <Actualizable />
    <Wrapper />
   </div>
  );
}

export default App;
