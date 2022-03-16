import React, {useEffect, useState} from 'react'
import products from '../database/products'
import ItemList from './ItemList'
import ItemDetailContainer from './ItemDetailContainer'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'



const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);

  const {idCategoria} = useParams()

  function getDatos() {
    return new Promise((resolve, reject) => {
       setTimeout(function(){
         console.log(idCategoria)
         resolve(products)
       }, 2000);
    }
   )}

  useEffect(() => {

    toast.info("Cargando productos..")

    getDatos()
    
    .then((resultado) =>{
      toast.dismiss()
      setItems(resultado)
    })
    .catch((error) =>{
      toast.error("Error al traer los productos")
    })
    .finally(()=>{
      setLoading(false)
    })

  }, [idCategoria]);
  
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
    <>  
            <h3 className='titulos'>Productos</h3>
            <nav class="nav ml-4 ">
                <Link class="nav-link liNav active" to="/categoria/1">CUENCOS</Link>
                <Link class="nav-link liNav" to="/categoria/2">TAZAS</Link>
                <Link class="nav-link liNav" to="/categoria/3">MACETAS</Link>
                <Link class="nav-link liNav" to="/categoria/4">FLOREROS</Link>
                <Link class="nav-link liNav" to="/categoria/5">PIEZAS ÚNICAS</Link>
            </nav> 
    <ItemList items={items}/>
    <ItemDetailContainer/>
    </>
    )
  }
}

export default ItemListContainer