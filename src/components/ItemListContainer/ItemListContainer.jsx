import React from "react";
import { Item } from "../Item/Item";
import './ItemListContainer.scss';

export const ItemListContainer = ({products }) =>  {


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