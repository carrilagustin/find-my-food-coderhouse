import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import './ItemCount.css'


export const ItemCount = (props) => {

    const {initial, stock, countAdd} = props;

    const [count, setCount] = useState(+(initial));

    const decrease = () => {
        if (count <= initial) {
            return;
        } else {
            setCount(count - 1)
        }
    }

    const increase = () => {
        if (count >= stock) {
            return;
        } else {
            setCount(count + 1);
        }
    }

    return (
        <>
        <div>
                <ButtonGroup className="mb-2 groupButton">
                    <Button className="countButton" size="sm" onClick={decrease}>-</Button>
                        <h2 className="count">{count}</h2>    
                    <Button className="countButton" size="sm" onClick={increase}>+</Button>
                </ButtonGroup>
        </div>
        <div>
            <Button className="addButton" size="lg" onClick={()=> countAdd(count)}>Agregar</Button>
        </div>
        </>        
    )
}

export default ItemCount