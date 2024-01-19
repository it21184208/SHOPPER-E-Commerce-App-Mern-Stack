import React from 'react'
import './NewCollection.css'

import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collection">
{new_collections.map((item,i)=>{
    return<Item key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
})}

        </div>
    </div>
  )
}

export default NewCollection
