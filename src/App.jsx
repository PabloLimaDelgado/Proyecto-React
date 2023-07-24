import './App.css';
import { NavBar } from './components/NavBar/navBar';
import { MainPage } from './pages/MainPage';
import { ItemCount } from './components/ItemCount/ItemCount';
import { DetailProduct } from './pages/DetailProduct';
function App() {
  return (
    <div>
      {/* 
      <NavBar/>
      <MainPage/>
      */}
      <DetailProduct/>
    </div>
  );
}

export default App; 
