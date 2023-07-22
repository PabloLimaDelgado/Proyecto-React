import coco_negra from '../assets/coco_negra.png';
import fondo3x2 from '../assets/fondo3x2.jpg';
import social_tourist220x350 from '../assets/social_tourist220x350.png'
const ROPA = [
    {
      "img": '../assets/coco_negra.png',
      "descrpicion": "Remera Coco negra y blanca de uso femenino con mangas largas",
      "id" : 1,
      "price" : 3300
    },
    {
      "img": '../assets/social_tourist220x350.png',
      "descripcion": "Pantalon corto de hombre social tourist de color marron, blanco y negro",
      "id" : 2,
      "price" : 4000
    }
  ];
  

  export const getRopas = (id) => {
    const _ropa = id
      ? ROPA.filter((ropa) => ropa.category.toLowerCase() === id)
      : ROPA;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_ropa); //Se resuelve con el array de libros
      }, 500);
    });
  };
  
  export const getROPA = (id) => {
    const ropa = ROPA.filter((ropa) => ropa.id === id)[0];
  
    return new Promise((res) => {
      setTimeout(() => {
        res(ropa);
      }, 1500);
    });
  };