import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className='row container-detail p-5 mt-4'>
       <div>
         <img src={item.img} className='img-box-detail'></img>
       </div>
       <div className='ml-5'>
          <p className='fontDetail'>{item.nombre}</p>
          <p className='font-detail-subtitles'>${item.precio},00</p>
          <p className='cuotas'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='30' fill='currentColor' className='bi bi-credit-card mr-2' viewBox='0 0 16 16'>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
            </svg>
            3 cuotas sin interés de $663,33
          </p>
          <p><b>10% de descuento</b> pagando con Transferencia / Depósito</p>
          <a href='#' className='m-de-pago'>Ver medios de pago</a>
          <hr></hr>
          <div className='form-group mt-3'>
                <label for='exampleFormControlSelect1'>Color:</label>
                <select className='form-control' id='exampleFormControlSelect1'>
                  <option>Blanco</option>
                  <option className='select-black'>Negro</option>
                  <option className='select-terracota'>Terracota</option>
                </select>
          </div>
          <ItemCount stock={15} initial={1}/>
        </div>
        <h5 className='mt-5'>Descripción:</h5>
        <p className='mt-4'>Florero con forma de dona de cerámica artesanal con esmalte transparente. Opciones de color blanco, negro y terracota. Las tres opciones son con la estampa de la imagen.</p>
        <p>Aclaración: todos los productos son hechos artesanalmente, por lo que pueden haber variaciones en sus tamaños y medidas.</p>
    </div>
  )
}
export default ItemDetail