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

      const queryCollectionCategory = query(collection(db, 'productos'), where('id', '==', itemId))
      
      getDocs(queryCollectionCategory)
        .then(resp => setItem(resp.docs[0].data()))
        .catch((error) => {
          toast.error("Error al cargar productos");
        })
        .finally(() => setLoading(false))
  
    }, [])

   
    return (
      <>
       <ItemDetail item= {item}/>
      </>
    )
 }
 
 export default ItemDetailContainer