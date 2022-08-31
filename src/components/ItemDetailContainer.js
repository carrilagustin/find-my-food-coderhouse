import React from 'react'
import Item from './Item';
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import Dishes from '../data/Dishes.json'


function ItemDetailContainer() {


    return (
        <>
            <div className="tarjeta">
                <ItemDetail/>
            </div>
        </>
    )
}

export default ItemDetailContainer