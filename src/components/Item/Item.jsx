import React from 'react';
import './Item.scss';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

export const Item = ({ img, price, nombre, id, descuento }) => {
    const [showButton, setShowButton] = useState(false);
    
    const handleMouseEnter = () => {
        setShowButton(true)
    }

    const handleMouseLeave = () => {
        setShowButton(false)
    }
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

            <div className='aparece'>
              {showButton && <p>{descuento}%</p>}
              {showButton && 
              <NavLink
              to = {`/item/${id}`}
              >
                <button>Ver producto</button>
              </NavLink>
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};