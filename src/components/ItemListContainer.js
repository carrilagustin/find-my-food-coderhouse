import React from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer() {
    return (
        <>
            <div className="tarjeta">
                <ItemList />
            </div>
            <div className="textExample">
                <ItemCount stock={5} initial={1}/>
            </div>
        </>
    )
}

export default ItemListContainer