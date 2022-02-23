import React from 'react'

function ItemListContainer({categorías}) {
    
  return (
    <main className='ml-5 pl-3'>
       <p className='title-productos'><b>Nuestros productos</b></p>
       <p className='title-categorias'><b>Categorías</b></p>
       <ul>
           <li className='mb-2'>
               <a href='#'>{categorías[0]}</a>
            </li>
            <li className='mb-2'>
               <a href='#'>{categorías[1]}</a>
            </li>
            <li className='mb-2'>
               <a href='#'>{categorías[2]}</a>
            </li>
            <li className='mb-2'>
               <a href='#'>{categorías[3]}</a>
            </li>
       </ul>
    </main>
  )
}

export default ItemListContainer