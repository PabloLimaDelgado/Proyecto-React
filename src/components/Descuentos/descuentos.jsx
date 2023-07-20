import './descuentos.scss';
import imagenes from '../../assets/imagenes';
import { useState } from 'react';


const Card = ({img, precio, nombre, descuento}) => {
    const [showButton, setShowButton] = useState(false);
    
    const handleMouseEnter = () => {
        setShowButton(true)
    }

    const handleMouseLeave = () => {
        setShowButton(false)
    }
    return(
        <div className='card'>
            <section 
            className='section-img'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <img src={img}/>
                <p>{nombre}</p>
                <h4>${precio}</h4>

                {showButton && <p className='p-carrito'>{descuento}% de descuento</p>}
                {showButton && <button>Ver producto</button>}
            </section>
        </div>

    )
}

export const Descuentos = () => {
    return (
        <div className="descuentos">
            <h3>Descuentos</h3>

            <section className='section1'>
                <Card 
                    img = { imagenes[0].img }
                    nombre = {"Remera coco Negra"}
                    precio= {4500}
                    descuento={40}
                />

                <Card 
                    img = { imagenes[1].img }
                    nombre = {"Pantalon Social Tourist"}
                    precio= {3200}
                    descuento={60}
                />
            </section>
        </div>
    )
}

