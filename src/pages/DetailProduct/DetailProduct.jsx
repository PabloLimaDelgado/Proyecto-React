import { useEffect, useState } from "react";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import { getROPA } from "../../lib/ropa.request";
import { useParams } from "react-router-dom";
import './DetailProduct.scss'

export const DetailProduct = () => {
    const { id } = useParams();
    const [ropa, setRopa] = useState({});
  
    useEffect(() => {
      getROPA(+id).then((res) => {
        setRopa(res);
      });
    }, []);
  
    if(!Object.keys(ropa).length) return // renderizando un mensaje de carga
  
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
  
          <ItemCount onAdd={() => alert("Comprados")} />
        </div>
      </div>
    );
  };