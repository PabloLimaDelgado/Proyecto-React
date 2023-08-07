import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.scss'
import { useCartContext } from "../../state/Cart.context";

export const CartWidget = () => {
    const { getCartQty } = useCartContext();
    return (
            <div className='div-carrito'>
                <FontAwesomeIcon icon={faCartShopping} className='carrito'/>
                <div>
                    <h1>Mi carrito, <p>({getCartQty})</p></h1>
                </div>
            </div>
    )
}