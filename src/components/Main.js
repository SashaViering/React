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
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/items/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
      </Routes>  
    </main>
  )
}
export default Main;
