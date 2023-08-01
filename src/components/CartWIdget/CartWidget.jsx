import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.scss'
import { useCartContext } from "../../state/Cart.context";
import { NavLink } from "react-router-dom";

export const CartWidget = () => {
    const { getCartQty } = useCartContext();
    return (

        <NavLink
        to={"/cart"}
        >
            <div className='div-carrito'>
                <FontAwesomeIcon icon={faCartShopping} className='carrito'/>
                <div>
                    <p>Mi carrito, ({getCartQty})</p>
                </div>
            </div>
        </NavLink>
    )
}