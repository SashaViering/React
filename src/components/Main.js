import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carrito from './Carrito';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

 const Main = () => {
  return (
    <main>
      <Routes>  
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      </Routes>  
    </main>
  )
}
export default Main;
