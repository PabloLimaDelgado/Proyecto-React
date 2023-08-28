import { useEffect, useState } from "react";
import { useCartContext } from "../../state/Cart.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Cart.scss'
import { addOrder } from "../../lib/orders.request";
import { updateManyRopa } from "../../lib/ropa.request";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LocaleString = ({num, tipo}) => {
    return (
        <span>
            {tipo} $
            {num.toLocaleString("es-CO", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            })} 
        </span>
    )
}

export const Cart = () => {
  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [mail2, setMail2] = useState("")

  const createOrder = async () => {

    const items = cart.map(({id,nombre,qty,price}) => ({
        id,
        nombre,
        qty,
        price
    }));

    const order = {
        buyer: {name, mail},
        items,
        total: getTotalPrice
    }

    const id = await addOrder( order );

    await updateManyRopa(items);

    setMail("")
    setName("")
    setMail2("")

    toast.success(`¡Gracias ${name}! Tu compra ha sido realizada. El id de tu compra es ${id}`, {
        autoClose: 3000, // 3 segundos
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
    })
    await new Promise(resolve => setTimeout(resolve, 3000));  // Espera 3 segundos

    cleanCart();
    navigate("/");

  }

    const isEmailValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const areFieldsValid = () => {
        return (
            name.trim() !== "" &&
            isEmailValid(mail) && 
            mail.trim() !== "" &&
            mail === mail2
        );
    };

  return (
    <div className="cart">
        <div>{cart.length ?
            <>
            <section>
                <div className="lista-productos">

                {cart.map((item) => (
                <div className="producto" key={item.id}>
                    <img src={item.img}/>

                    <div>
                        <span>Cantidad: {item.qty}</span>

                        <LocaleString num={(item.price - (item.price * item.descuento / 100))} tipo={"Subtotal: "}/>
                        
                        <LocaleString num={(item.qty * (item.price - (item.price * item.descuento / 100)))} tipo={"Total: "} className="subtotal"/>

                        <button
                            onClick={() => removeProduct(item.id)}
                            >
                            <FontAwesomeIcon icon={faTrash} className="custom-shake"/>
                        </button>
                    </div>
                </div>
                ))}
                </div>

                <div  className="total">
                <span>Total: </span>{" "}

                <LocaleString num={getTotalPrice} tipo={""}/>

                </div>{" "}

                <div className="vaciar-carrito">
                <button onClick={cleanCart}>
                Vaciar carrito
                </button>
                </div>
            </section>


                <div className="form">
                    <div>
                        <span>Nombre</span>
                        <input placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <span>Correo</span>
                        <input placeholder="Correo" onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div>
                        <span>Repetir Correo</span>
                        <input placeholder="Repetir correo" onChange={(e) => setMail2(e.target.value)}/>
                    </div>

                    <button
                    onClick = {createOrder}
                    disabled={!areFieldsValid()} 
                    >    
                        Realizar Pedido
                    </button>
                </div>

            </>  :  <div className="centrado">
                        <h1 className="carrito-vacio">EL carrito está vacío</h1>
                        <FontAwesomeIcon icon={faCartShopping} className="carrito-vacio-logo"/>
                    </div>
                }
        </div>

        <ToastContainer />
  </div>
  );
};