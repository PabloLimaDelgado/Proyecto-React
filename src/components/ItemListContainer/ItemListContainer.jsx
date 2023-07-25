import React from "react";
import { Item } from "../Item/Item";
import './ItemListContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const ItemListContainer = ({ isLoading, products }) =>  {
  if (isLoading) {
    return <FontAwesomeIcon icon={faSpinner} className="spinner" spin />; // Si está cargando, muestra el spinner
  }

  return (
    <section className="item-list-container">
      <h3>Descuentos</h3>
      <div className="item-list">
        {products.map((product) => (
          <Item
            id={product.id}
            img={product.img}
            nombre={product.nombre}
            price={product.price}
            descuento={product.descuento}
          />
        ))}
      </div>
    </section>
  );
}