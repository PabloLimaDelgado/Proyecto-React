import { useState, useEffect } from "react";
import { getRopas } from "../lib/ropa.request";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const MainPage = () => {
  
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  
     getRopas()
      .then(res => {
        setIsLoading(false);
        setProducts(res)}
        
        ) 
  
    }, [])
    return (
      <div>
        <div className="container">
          <>{isLoading ? <FontAwesomeIcon icon={faSpinner} className="spinner" spin /> : <ItemListContainer products={products}/>}</> 
        </div>
      </div>
    );
  };

