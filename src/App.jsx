import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar/navBar';
import { MainPage } from './pages/MainPage';
import { ItemCount } from './components/ItemCount/ItemCount';
import { DetailProduct } from './pages/DetailProduct';
import { Category } from "./pages/Category";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>

        <Route path="/" element={<MainPage />} />
         <Route path="/item/:id" element={<DetailProduct />} />
         <Route path="/categoria/:id" element={<Category />} />

    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App; 
