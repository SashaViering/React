import React from 'react'
import Item from './Item'

 const ItemList = ({items}) => {
  return (
    <section className='row'>
        { items.map(item => {
          return ( 
            <div>
                <Item
                     key={item.id}
                     item={item}
                />
            </div>
          )
        })}
    </section>
  )
}

export default ItemList
