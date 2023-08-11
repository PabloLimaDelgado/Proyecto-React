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
import { collection, getDocs, where, query, getDoc, doc, addDoc, writeBatch, increment } from 'firebase/firestore';
import { useState } from 'react';

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

/*  export const searchRopa = (nombre) => {
    const resultados = ROPA.filter((producto) => producto.nombre.toLowerCase().includes(nombre));

    return new Promise((res) => {
      setTimeout(() => {
        res(resultados)
      }, 2000);
    });
} */

export const searchRopa= async (nombre) => {
  nombre = nombre.toLowerCase();

  const q = query(ropaRef, where('nombreLower', '>=', nombre), where('nombreLower', '<=', nombre + '\uf8ff'));

  let ropas = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    ropas = [...ropas, {...doc.data(), id: doc.id}]
  });

  return ropas;
}

export const updateManyRopa = async ( items ) =>{
  const batch = writeBatch(db);

  items.forEach(({id, qty}) => {
    batch.update(doc(db, "items", id), {
      stock: increment(-qty)
    })
  })
  batch.commit();
}