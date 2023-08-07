import { useEffect, useState, useCallback } from "react";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import { getROPA } from "../../lib/ropa.request";
import { useNavigate, useParams } from "react-router-dom";
import './DetailProduct.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from "../../state/Cart.context";

export const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ropa, setRopa] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { addProduct, itemInCart } = useCartContext();

    useEffect(() => {
      getROPA(id).then((res) => {
        setIsLoading(false);
        setRopa(res);
      });
    }, []);

    const handleAdd = useCallback(
      (qty) => {
        addProduct(ropa, qty);
      },
      [addProduct, ropa]
    );

    if (isLoading) {
      return <FontAwesomeIcon icon={faSpinner} className="spinner" spin />
    }
  
    const precioDescuento = ropa.price - (ropa.price * ropa.descuento / 100);
    return (
      <div className="DetailProduct">
        <div className="divFotos">
          <img src={ropa.img}/>
        </div>

        <div className="divResto">
          <span className="nombre">{ropa.nombre} </span>
  
          <p className="descripcion">{ropa.descripcion}</p>
  
          <span className="precio-original">
          Precio Original: 
          <p>
            $
            {(ropa.price || 0).toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          </span>

          <span className="precio-descontado">
          Precio Descontado: 
          <p>
            $
            {precioDescuento.toLocaleString("es-MX", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </p>
          </span>

          <ItemCount stock={ropa.stock - (itemInCart?.(id)?.qty || 0)} onAdd={handleAdd}/>
        </div>
      </div>
    );
  };