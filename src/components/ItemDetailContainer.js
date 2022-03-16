import React, {useEffect, useState} from 'react'
import products from '../database/products'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function getItem() {
  return new Promise((resolve, reject) => {
     setTimeout(function(){
       resolve(products)
     }, 2000);
  }
 )}
 
 const ItemDetailContainer = () => {

   const [item, setItems] = useState({});
   const {idItem} = useParams()
 
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