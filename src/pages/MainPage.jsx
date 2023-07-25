import { useState, useEffect } from "react";
import { getRopas } from "../lib/ropa.request";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const MainPage = () => {
  
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  
     getRopas()
      .then(res => {
        setIsLoading(false);
        setProducts(res)
      }) 
    }, []);

    if (isLoading) {
      return isLoading ? (<FontAwesomeIcon icon={faSpinner} className="spinner" spin />) : (<div><ItemListContainer products={products} /></div>)
    }
  
    return (
      <div>
        <div className="container">
          <ItemListContainer products={products} />
        </div>
      </div>
    );
  };