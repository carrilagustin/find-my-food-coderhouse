import React from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount'


function ItemListContainer() {
    return (
        <>
            <div className="textExample">
                <ItemCount stock={5} initial={1}/>
            </div>
        </>
    )
}

export default ItemListContainer