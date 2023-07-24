import React from 'react';
import './Item.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Item = ({ img, price, nombre, id }) => {
    const [showButton, setShowButton] = useState(false);
    
    const handleMouseEnter = () => {
        setShowButton(true)
    }

    const handleMouseLeave = () => {
        setShowButton(false)
    }

    const navigate = useNavigate();
  return (
    <div className="descuentos"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <section className='section1'>
        <div className="card">
          <div className="section-img">
            <img src={img} />
            <p>{nombre}</p>
            <h4>
              $
              {price.toLocaleString("es-MX", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h4>
            {showButton && <button  onClick={() => navigate(`/item/${id}`)}>Ver producto</button>}
          </div>
        </div>
      </section>
    </div>
  );
};
