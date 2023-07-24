import { useState, useEffect } from "react";
import { getRopas } from "../lib/ropa.request";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const MainPage = () => {
  
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  
     getRopas() //Se simula una peticion
      .then(res => {
        setIsLoading(false); //Cuando esta se resuelve cambia al estado para dejar de cargar
        setProducts(res)} //Ademas setea productos con lo que resolvio la promesa (no hay catch porque estamos segurods de que siempre hay algo)
        
        ) 
  
    }, []);
  
  
  
    return (
      <div>
        <div className="container">
          <ItemListContainer isLoading={isLoading} products={products} />
        </div>
      </div>
    );
  };