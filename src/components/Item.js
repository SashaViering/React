import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className='card mb-3 caja'>
                <div className='card-body text-center'>
                    <img src={item.img} className='img-box mb-3' alt='imagen de cada producto'></img>
                    <h5 className='card-title fontSizeProd fontWCateg'>{item.nombre}</h5>
                    <p className='card-text'>{item.material}</p>
                    <p className='card-text fontwBold'>${item.precio}</p>
                    <p className='card-text'>Stock: ${item.stock}</p>
                    <button type="button" id="boton${indice}" className='btn-info btn btn-small'>
                        +
                    </button>
                </div>
                <Link to={`/item/${item.id}`} className='text-center mb-3'>Ver detalle</Link>
    </div>
  )
}
export default Item

