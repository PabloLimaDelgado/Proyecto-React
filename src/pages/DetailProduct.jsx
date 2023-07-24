import { useEffect, useState } from "react";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getROPA } from "../lib/ropa.request";
import { useParams } from "react-router-dom";

export const DetailProduct = () => {
    const { id } = useParams();
    const [ropa, setRopa] = useState(null);
  
    useEffect(() => {
      getROPA(+id).then((res) => {
        setRopa(res);
      });
    }, [id]);
  
    if (!ropa) return <div>Cargando...</div>; // renderizando un mensaje de carga
  
    return (
      <div>
        <div>
          <div>
            <img src={ropa.img} alt={ropa.nombre} />
          </div>
          <div>
            <span>{ropa.nombre} </span>
  
            <p>{ropa.descripcion}</p>
  
            <span>
              $
              {(ropa.price || 0).toLocaleString("es-MX", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
  
            <ItemCount onAdd={() => alert("Comprados")} />
          </div>
        </div>
      </div>
    );
  };