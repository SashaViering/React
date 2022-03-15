import React, {useEffect, useState} from 'react'
import Item from './Item';
import ItemDetail from './ItemDetail'

let ItemInicial = {
    "id": 3,
    "categoria": "Floreros",
    "nombre": "Florero Dona",
    "material": "cerámica",
    "precio": 1990,
    "stock": 25,
    "img": "/img/producto8.jpg"
}

function getItem() {
  return new Promise((resolve, reject) => {
     setTimeout(function(){
       resolve(ItemInicial)
     }, 2000);
  }
 )}
 
 const ItemDetailContainer = () => {

   const [item, setItems] = useState({});
 
   useEffect(() => {
     getItem()
     .then(respuestaPromise => setItems(respuestaPromise))
     .catch( error => console.error(error));
   }, []);
   
   
    return (
      <>
       <ItemDetail item= {item}/>
      </>
    )
 }
 
 export default ItemDetailContainer