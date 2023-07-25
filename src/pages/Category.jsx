import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRopas } from "../lib/ropa.request";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const Category = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
  
     getRopas(id) 
      .then(res => {
        setIsLoading(false); 
        setProducts(res)} 
        ) 
    }, [id]);

    return (
      <div>
        <div className="container">
        <>{isLoading ? <FontAwesomeIcon icon={faSpinner} className="spinner" spin /> : <ItemListContainer products={products} />}</>
        </div>
      </div>
    );

}