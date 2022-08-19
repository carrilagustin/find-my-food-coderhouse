import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'


function ItemCount(props) {
    
    const [count, setCount] = useState(+(props.initial));

    const decrease = () => {
        if (count <= props.initial) {
            return;
        } else {
            setCount(count - 1)
        }
    }

    const increase = () => {
        if (count >= props.stock) {
            return;
        } else {
            setCount(count + 1);
        }
    }

    const onAdd = () => {
        console.log("Has agregago " + count + " articulos")
    }
    
    
    return (
        <>
        <div>
            <h2>{count}</h2>
                <ButtonGroup className="mb-2">
                    <Button variant="success" size="lg" onClick={decrease}>-</Button>
                </ButtonGroup>
                {' '}
                <ButtonGroup className="mb-2">
                    <Button variant="success" size="lg" onClick={increase}>+</Button>
                </ButtonGroup>
                {' '}
        </div>
        <div>
            <Button variant="primary" size="lg" onClick={onAdd}>Agregar</Button>
        </div>
        </>        
    )
}

export default ItemCount