import React from 'react'
import CardDetail from './CardDetail'
import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router-dom'
import { ItemCount } from './ItemCount'


const ItemDetail = () => {
    
    const { dishId } = useParams();

    const [dish, setDish] = useState({});

    const URL = "http://localhost:8000/dish"

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
            
            const nuevoObjeto = data.find(dish => dish.id === parseInt(dishId))
            
            setDish(nuevoObjeto);
            
            console.log('nueva objeto', nuevoObjeto);
        
    }
    useEffect(() => {
        setTimeout(() => {
            showData();
            
            console.log("console del useffect", dish);
        }, 1000)
    }, [dishId])
    
    

    const countAdd = (count) => {
        console.log("Has agregago " + count + " articulos")
        
    }


    return (
        <>
            <div className="show">
                <Row>
                    <Col>
                        <div>
                            <CardDetail key={dish.id} name={dish.name} price={dish.price} img={dish.url} ingredients={dish.ingredients}/>
                            <ItemCount stock={5} initial={1} countAdd={countAdd}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ItemDetail