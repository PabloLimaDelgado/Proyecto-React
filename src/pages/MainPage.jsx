import { useState, useEffect } from "react";
import { getRopas } from "../lib/ropa.request";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const MainPage = () => {
  
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  
     getRopas()
      .then(res => {
        setIsLoading(false);
        setProducts(res)}
        
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