import { useEffect } from "react";
import { useCartContext } from "../../state/Cart.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Cart.scss'
export const Cart = () => {
  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  return (
    <div className="cart">
        <div>{cart.length ?
            <>
                <div className="lista-productos">

                    {cart.map((item) => (
                    <div className="producto" key={item.id}>
                        <img src={item.img}/>

                        <div>
                            <span>Cantidad: {item.qty}</span>

                            <span>
                            Subtotal: $
                            {(item.price - (item.price * item.descuento / 100)).toLocaleString("es-CO", {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                            })}
                            </span>
                            
                            <span className="subtotal">
                            Total: $
                            {(item.qty * (item.price - (item.price * item.descuento / 100))).toLocaleString("es-CO", {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                            })}
                            </span>

                            <button
                                onClick={() => removeProduct(item.id)}
                                >
                                <FontAwesomeIcon icon={faTrash} className="custom-shake"/>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>

                <div>
                    <div  className="total">
                    <span>Total: </span>{" "}
                    <span>
                        $
                        {getTotalPrice.toLocaleString("es-CO", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                        })}
                    </span>
                    </div>{" "}
                </div>

                <div className="vaciar-carrito">
                    <button onClick={cleanCart}>
                    Vaciar carrito
                    </button>
                </div>

            </>  :  <div className="centrado">
                        <h1 className="carrito-vacio">EL carrito está vacío</h1>
                        <FontAwesomeIcon icon={faCartShopping} className="carrito-vacio-logo"/>
                    </div>
                }
        </div>
  </div>
  );
};