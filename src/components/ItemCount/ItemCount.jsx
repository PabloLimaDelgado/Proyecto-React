import { useState } from "react";
import './ItemCount.scss';

export const ItemCount = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  };

  const handleSub = () => {
    setCount(Math.max(1, count - 1));
  };

  return (
    <div className="ItemCount">
      <div>
        <button onClick={() => handleSub()}>-</button>
        <span>{count}</span>
        <button onClick={() => handleSum()}>+</button>
      </div>

      <button disabled={!stock} onClick={() => onAdd(count)}>
        Agregar a carrito
      </button>
  </div>

  );
};