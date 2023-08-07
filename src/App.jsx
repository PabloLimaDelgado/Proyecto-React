import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar/navBar';
import { MainPage } from './pages/MainPage/MainPage';
import { DetailProduct } from './pages/DetailProduct/DetailProduct';
import { Category } from "./pages/Category/Category";
import { CartProvider } from "./state/Cart.context";
import { ThemeProvider } from "./state/Theme.context";
import { Cart } from "./pages/Cart/Cart";
import { Search } from "./pages/Search/Search";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>
      {" "}
      {/* ROUTE padre necesita <Outlet /> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/item/:id" element={<DetailProduct />} />
      <Route path="/categoria/:id" element={<Category />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search/:busqueda" element={<Search/>} />
    </Route>
  )
);


function App() {
  return (
    <div>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </ThemeProvider>
  </div>
  );
}

export default App; 
