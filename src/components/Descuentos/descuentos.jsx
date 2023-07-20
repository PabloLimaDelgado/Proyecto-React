import './descuentos.scss';
import imagenes from '../../assets/imagenes';
import { useState } from 'react';

const Card = ({img, precio, nombre}) => {
    return(
        <div className='card'>
                <img src={img}/>
                <p>{nombre}</p>
                <h4>${precio}</h4>
        </div>
    )
}

export const Descuentos = () => {
    const [showButton, setShowButton] = useState(false);
    
    const handleMouseEnter = () => {
        setShowButton(true)
    }

    const handleMouseLeave = () => {
        setShowButton(false)
    }
    return (
        <div className="descuentos">
            <h3>Descuentos</h3>

            <section className='section1'>
            <section
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Card 
                    img = { imagenes[0].img }
                    nombre = {"Remera coco Negra"}
                    precio= {4500}
                />

                <div className='buttonAparece'>
                    {showButton && <p>40% de descuento</p>}
                    {showButton && <button>Comprar</button>}
                </div>
            </section>

            <section
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Card 
                    img = { imagenes[1].img }
                    nombre = {"Remera coco Negra"}
                    precio= {4500}
                />

                <div className='buttonAparece'>
                    {showButton && <p>40% de descuento</p>}
                    {showButton && <button>Comprar</button>}
                </div>
            </section>
            </section>
        </div>
    )
}