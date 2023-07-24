import coco_negra from '../assets/coco_negra.png';
import social_tourist220x350 from '../assets/social_tourist220x350.png'
import royaura_amarilla from '../assets/royaura_amarillla.png'
import malla_tascani from '../assets/Malla_tascani220x350.png'
import topshop_rosado from '../assets/topshop_rosado.png'
import rowne_crema from '../assets/rowne_crema220x350.png'

const ROPA = [
    {
      "img": coco_negra,
      "descripcion": "Remera Coco negra y blanca de uso femenino con mangas largas",
      "id" : 1,
      "price" : 3300,
      "descuento" : 40,
      "nombre" : "Remera manga corta Coco"
    },
    {
      "img": social_tourist220x350,
      "descripcion": "Pantalon corto de hombre social tourist de color marron, blanco y negro",
      "id" : 2,
      "price" : 4000,
      "descuento " : 60,
      "nombre" : "Pantalon corto Royaura"
    },
    {
      "img": royaura_amarilla,
      "descripcion": "Camisa de hombre amarilla y negra con estilo de rayas marca royaura",
      "id" : 3,
      "price" : 8500,
      "descuento " : 20,
      "nombre" : "Camisa Royaura"
    },
    {
      "img": malla_tascani,
      "descripcion": "Ropa de baño de hombre, color naranja marca tascani",
      "id" : 4,
      "price" : 3800,
      "descuento " : 50,
      "nombre" : "Traje de baño Tascani"
    },
    {
      "img": topshop_rosado,
      "descripcion": "Pantalon largo oversize de mujer cuadriculado color rosado marca topshop",
      "id" : 5,
      "price" : 6000,
      "descuento " : 10,
      "nombre" : "Pantalon TopShop"
    },
    {
      "img": rowne_crema,
      "descripcion": "Remera manga corta unisex de color blanco crema marca rowne",
      "id" : 6,
      "price" : 2000,
      "descuento " : 15,
      "nombre" : "Remera corta Rowne"
    },
  ];
  

  export const getRopas = (id) => {
    const _ropa = id
      ? ROPA.filter((ropa) => ropa.category.toLowerCase() === id)
      : ROPA;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_ropa)
      }, 2000);
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