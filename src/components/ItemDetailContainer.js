import React, {useEffect, useState} from 'react'
import { toast } from "react-toastify"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
 
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams()
  
    useEffect(() => {

    const productosCollection = collection(db, "productos")
    const filtro = query(productosCollection, where("id", "==", Number(itemId)))
    const pedido = getDocs(filtro)

    pedido
      .then(res => setItem(res.docs[0].data()))
      .catch(() => toast.error("Error al cargar los productos"))
      .finally(() => setLoading(false))
    }, [])

   
    return (
      <>
       <ItemDetail item= {item}/>
      </>
    )
 }
 
 export default ItemDetailContainer