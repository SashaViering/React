import React, {useEffect, useState} from 'react'
import { toast } from "react-toastify"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

 
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams()
  
    useEffect(()=>{

      toast.info("Cargando productos..")
  
      fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response)=>{
          return response.json()
      })
      .then((respuesta)=>{
        toast.dismiss()
        setItem(respuesta)
      })
      .catch(()=>{
        toast.error("Error al cargar el producto")
      })
      .finally(()=>{
        setLoading(false)
      })
  
    },[])

   
    return (
      <>
       <ItemDetail item= {item}/>
      </>
    )
 }
 
 export default ItemDetailContainer