import { useEffect } from "react";
import { useCartContext } from "../../state/Cart.context";
import { AiOutlineDelete } from "react-icons/ai";
export const Cart = () => {
  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  return (
    <div className="cart">
        <span>Total {getTotalPrice().toLocaleString("es.CO")}</span>
    </div>
  );
};