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


import {db} from './config'
import { collection, getDocs, where, query, getDoc, doc, addDoc } from 'firebase/firestore';

const ROPA = [
    {
      img: coco_negra,
      descripcion: "Remera Coco negra y blanca de uso femenino con mangas largas",
      price: 3300,
      descuento: 40,
      nombre: "Remera manga larga Coco",
      categoria: "remeras",
      stock: 10
    },
    {
      img: social_tourist220x350,
      descripcion: "Pantalon corto de hombre social tourist de color marron, blanco y negro",
      price: 4000,
      descuento: 60,
      nombre: "Pantalon corto Royaura",
      categoria: "pantalones",
      stock: 20
    },
    {
      img: royaura_amarilla,
      descripcion: "Camisa de hombre amarilla y negra con estilo de rayas marca royaura",
      price: 8500,
      descuento: 20,
      nombre: "Camisa Royaura",
      categoria: "camisas",
      stock: 15
    },
    {
      img: malla_tascani,
      descripcion: "Ropa de baño de hombre, color naranja marca tascani",
      price: 3800,
      descuento: 50,
      nombre: "Traje de baño Tascani",
      categoria: "mallas",
      stock: 9
    },
    {
      img: topshop_rosado,
      descripcion: "Pantalon largo oversize de mujer cuadriculado color rosado marca topshop",
      price: 6000,
      descuento: 10,
      nombre: "Pantalon TopShop",
      categoria: "pantalones",
      stock: 19
    },
    {
      img: rowne_crema,
      descripcion: "Remera manga corta unisex de color blanco crema marca rowne",
      price: 2000,
      descuento: 15,
      nombre: "Remera manga corta Rowne",
      categoria: "remeras",
      stock: 21
    },
    {
      img: shein_lisa,
      descripcion: "Remera corta unisex, marca shein y de colores azul y celeste con un corte diagonal",
      price: 1500,
      descuento: 15,
      nombre: "Remera manga corta Shein",
      categoria: "remeras",
      stock: 11
    },
    {
      img: newChic_camuflado,
      descripcion: "Remera corta unisex, marca shein y de colores azul y celeste con un corte diagonal",
      price: 9000,
      descuento: 20,
      nombre: "Camisa NewChic",
      categoria: "camisas",
      stock: 25
    },
    {
      img: manki_bage,
      descripcion: "Pantalon corto lizo, color bage y marca manki",
      price: 3500,
      descuento: 60,
      nombre: "Pantalon corto Manki",
      categoria: "pantalones",
      stock: 10
    },
    {
      img: stylish_oscuro,
      descripcion: "Pantalon largo oversize de mujer color negro marca stylish",
      price: 5500,
      descuento: 10,
      nombre: "Pantalon largo Stylish",
      categoria: "pantalones",
      stock: 20
    },
    {
      img: shopStyle_negro,
      descripcion: "Traje de baño de hombre, color negro y gris marca billabong",
      price: 4000,
      descuento: 40,
      nombre: "Traje de baño ShopStile",
      categoria: "mallas",
      stock: 20
    },
    {
      img: blanc_shein,
      descripcion: "Remera larga hombre color blanco, marca shein para mujer",
      price: 3000,
      descuento: 50,
      nombre: "Remera manga larga Shein",
      categoria: "remeras",
      stock: 15
    },
    {
      img: tascani_camisa,
      descripcion: "Camisa de hombre manga corta, con estilo print marca tascani",
      price: 10000,
      descuento: 20,
      nombre: "Camisa Tascani",
      categoria: "camisas",
      stock: 8
    },
    {
      img: stylish_naranja,
      descripcion: "Pantalon largo oversize de mujer color naranja marca stylishi",
      price: 5500,
      descuento: 10,
      nombre: "Pantalon Largo Stylish",
      categoria: "Pantalones",
      stock: 15
    },
    {
      img: shein_morning,
      descripcion: "Remera manga corta de mujer, color blanco con estampa morning  marca shein",
      price: 1500,
      descuento: 15,
      nombre: "Remera manga corta Shein",
      categoria: "Remeras",
      stock: 20
    },
    {
      img: negra_shein,
      descripcion: "Rmera top de mujer color negro, para mujer marca shein",
      price: 1500,
      descuento: 15,
      nombre: "Remera manga larga Shein",
      categoria:"Remeras",
      stock: 21
    },
  ];
  

const ropaRef = collection(db, "items")

 /* export const getRopas = (id) => {
    const _ropa = id
      ? ROPA.filter((ropa) => ropa.categoria.toLowerCase() === id)
      : ROPA;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_ropa)
      }, 2000);
    });
  }; */

  export const getRopas = async (category) => {

    const q = category
    ? query(ropaRef, where('categoria', '==', category))
    : ropaRef;

    let ropas = []
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
      ropas = [...ropas, {...doc.data(), id: doc.id}]
     });
     return ropas
  }
  
  /* export const getROPA = (id) => {
    const ropa = ROPA.find((ropa) => ropa.id === parseInt(id))
  
    return new Promise((res) => {
      setTimeout(() => {
        res(ropa);
      }, 1500);
    });
  }; */

  export const getROPA = async (id) => {
    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);

    if(docSnap.exists()) return {id: docSnap.id, ...docSnap.data() };

    return null
  }



  export const searchRopa = (nombre) => {
    const resultados = ROPA.filter((producto) => producto.nombre.toLowerCase().includes(nombre));

    return new Promise((res) => {
      setTimeout(() => {
        res(resultados)
      }, 2000);
    });
}

 export const cargarData = async () => {
  ROPA.forEach(async (ropa) => {
    await addDoc(ropaRef, ropa)
  }
    )
} 