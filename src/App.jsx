import './App.css';
import {Header1} from './components/Header1/header';
import { Descuentos } from './components/Descuentos/descuentos';
import { ItemDetailContainer } from './components/ItemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div>
      <Header1 />
      <Descuentos/>
      <ItemDetailContainer />
    </div>
  );
}

export default App; 
