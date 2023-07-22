import { Item } from "../Item/Item";

export const ItemListContainer = ({ products }) => (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          // Normal
          img={product.img}
          descripcion={product.descripcion}
          price={product.price}
          // {...product}
        />
      ))}
    </div>
  );