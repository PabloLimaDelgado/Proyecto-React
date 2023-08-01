import { useEffect, useState } from "react";
import { useParams, useLocation  } from "react-router-dom";
import { getRopas } from "../../lib/ropa.request";
import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './Category.scss'
export const Category = () => {
    const {id} = useParams();
    const location = useLocation();
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
    setIsLoading(true)
     getRopas(id) 
      .then(res => {
        setIsLoading(false); 
        setProducts(res)
      }) 
    }, [id]);

    if (isLoading) {
      return isLoading ? (<FontAwesomeIcon icon={faSpinner} className="spinner" spin />) : (<div><ItemListContainer products={products} /></div>)
    }

    return (
      <div>
        <div className="container">
        <h1 className="h1-categoria">{location.pathname.split('/').pop()}</h1>
          <ItemListContainer products={products} />
        </div>
      </div>
    );

}