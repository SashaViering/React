import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const {categoryId} = useParams()
  
  useEffect(() => {
    const productosCollection = collection(db, "productos")
    const pedido = getDocs(productosCollection)

    if(!categoryId){
      pedido
          .then(res => setItems(res.docs.map(doc => doc.data())))
          .catch(() => toast.error("Error al cargar los productos"))
          .finally(() => setLoading(false))

    }else{

      const productosCollection = collection(db, "productos")
      const filtro = query(productosCollection,where("category","==",categoryId))
      const pedido = getDocs(filtro)

      pedido
          .then(res => setItems(res.docs.map(doc => doc.data())))
          .catch(() => toast.error("Error al cargar los productos"))
          .finally(() => setLoading(false))

    }
		
	}, [categoryId])
 
  

  
  if(loading){
    return( 
      <div className='d-flex justify-content-center'>
        <div className='spinner-border text-info' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    )
  }else{
    return (
    <ItemList items={items}/>

    )
  }
}

export default ItemListContainer