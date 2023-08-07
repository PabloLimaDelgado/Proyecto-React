import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { searchRopa } from "../../lib/ropa.request";
import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import './Search.scss';

export const Search = () => {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  const { busqueda } = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    searchRopa(busqueda.toLowerCase())
      .then(res => {
        setIsLoading(false);
        setProducts(res);
      });
  }, [busqueda]);

  if (isLoading) {
    return <FontAwesomeIcon icon={faSpinner} className="spinner" spin />;
  }

  if (products.length === 0) {
    return <div className="no-productos-busqueda"> <h2>No se encontraron productos</h2> <FontAwesomeIcon icon={faCircleXmark} className="logo-no-productos"/></div>;
  }

  return (
    <div className="container">
      <h1 className="h1-categoria-titulo">Resultados de búsqueda para: <p> { busqueda}</p> </h1>
      <ItemListContainer products={products} />
    </div>
  );
};