import React, {useEffect, useState} from 'react'
import products from '../database/products'
import ItemList from './ItemList'

function getDatos() {
   return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve(products)
      }, 2000);
   }
  )}


const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getDatos()
    .then(respuestaPromise => setItems(respuestaPromise))
    .catch( error => console.error(error));
  }, []);
  
  
   return (
     <>
      <h4>{greeting}</h4>
      <ItemList items={items}/>
     </>
   )
}

export default ItemListContainer