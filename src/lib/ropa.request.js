import coco_negra from '../assets/coco_negra.png';
import social_tourist220x350 from '../assets/social_tourist220x350.png'
import royaura_amarilla from '../assets/royaura_amarillla.png'
import malla_tascani from '../assets/Malla_tascani220x350.png'
import topshop_rosado from '../assets/topshop_rosado.png'
import rowne_crema from '../assets/rowne_crema220x350.png'
import shein_lisa from '../assets/shein_lisa.png'
import newChic_camuflado from '../assets/newchic_camuflado_220x350.png'
import manki_bage from '../assets/Manki-bage.png'
import stylish_oscuro from '../assets/stylish_oscurito.png'
import shopStyle_negro from '../assets/shopstyle_negroso_220x350.png'
import blanc_shein from '../assets/blanca_shein.png'
import tascani_camisa from '../assets/camisa_tascani.png'
import stylish_naranja from '../assets/stylish_naranja220x350.png'
import shein_morning from '../assets/shein_morning.png'
import negra_shein from '../assets/negra_shein.png'

const ROPA = [
    {
      "img": coco_negra,
      "descripcion": "Remera Coco negra y blanca de uso femenino con mangas largas",
      "id" : 1,
      "price" : 3300,
      "descuento" : 40,
      "nombre" : "Remera manga larga Coco"
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
      "nombre" : "Remera manga corta Rowne"
    },
    {
      "img": shein_lisa,
      "descripcion": "Remera corta unisex, marca shein y de colores azul y celeste con un corte diagonal",
      "id" : 7,
      "price" : 1500,
      "descuento " : 15,
      "nombre" : "Remera manga corta Shein"
    },
    {
      "img": newChic_camuflado,
      "descripcion": "Remera corta unisex, marca shein y de colores azul y celeste con un corte diagonal",
      "id" : 8,
      "price" : 9000,
      "descuento " : 20,
      "nombre" : "Camisa NewChic"
    },
    {
      "img": manki_bage,
      "descripcion": "Pantalon corto lizo, color bage y marca manki",
      "id" : 9,
      "price" : 3500,
      "descuento " : 60,
      "nombre" : "Pantalon corto Manki"
    },
    {
      "img": stylish_oscuro,
      "descripcion": "Pantalon largo oversize de mujer color negro marca stylish",
      "id" : 10,
      "price" : 5500,
      "descuento " : 10,
      "nombre" : "Pantalon largo Stylish"
    },
    {
      "img": shopStyle_negro,
      "descripcion": "Traje de baño de hombre, color negro y gris marca billabong",
      "id" : 11,
      "price" : 4000,
      "descuento " : 40,
      "nombre" : "Ropa de baño ShopStile"
    },
    {
      "img": blanc_shein,
      "descripcion": "Remera larga hombre color blanco, marca shein para mujer",
      "id" : 12,
      "price" : 3000,
      "descuento " : 50,
      "nombre" : "Remera manga larga Shein"
    },
    {
      "img": tascani_camisa,
      "descripcion": "Camisa de hombre manga corta, con estilo print marca tascani",
      "id" : 13,
      "price" : 10000,
      "descuento " : 20,
      "nombre" : "Camisa Tascani"
    },
    {
      "img": stylish_naranja,
      "descripcion": "Pantalon largo oversize de mujer color naranja marca stylishi",
      "id" : 14,
      "price" : 5500,
      "descuento " : 10,
      "nombre" : "Pantalon Largo Stylish"
    },
    {
      "img": shein_morning,
      "descripcion": "Remera manga corta de mujer, color blanco con estampa morning  marca shein",
      "id" : 15,
      "price" : 1500,
      "descuento " : 15,
      "nombre" : "Remera manga corta Shein"
    },
    {
      "img": negra_shein,
      "descripcion": "Rmera top de mujer color negro, para mujer marca shein",
      "id" : 16,
      "price" : 1500,
      "descuento " : 15,
      "nombre" : "Remera manga larga Shein"
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