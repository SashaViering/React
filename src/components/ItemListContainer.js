import React, {useEffect, useState} from 'react'
import products from './products.json'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const {categoryId} = useParams()
  
  useEffect(() => {
      const url = `https://fakestoreapi.com/products${categoryId ? "/category/"+categoryId : ""}`
      console.log(url)

      fetch(url) 
      .then((response)=>{
          return response.json()
      })
      .then((resultado)=>{
        toast.dismiss()
          setItems(resultado)
      })
      .catch(()=>{
          toast.error("Error al cargar los productos")
      })
      .finally(()=>{
          setLoading(false)
      })

  },[categoryId])
  
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