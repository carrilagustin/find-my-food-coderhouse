import React from 'react'
import CardDetail from './CardDetail'
import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router-dom'


const ItemDetail = () => {
    
    const { dishId } = useParams();

    const [dish, setDish] = useState({});

    const URL = "http://localhost:8000/dish"

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
            
            const nuevaLista = data.find(dish => dish.id === parseInt(dishId))
            
            setDish(nuevaLista);
            
            console.log('nueva lista', nuevaLista);
        
    }
    useEffect(() => {
        setTimeout(() => {
            showData();
            
            console.log("console del useffect", dish);
        }, 1000)
    }, [dishId])
    

    console.log(dishId);
    
    return (
        <>
            <div className="show">
                <Row>
                {Array.isArray(dish)
                    ? dish.map((dish, i) => {
                        return (
                            <Col>
                                <div>
                                    <CardDetail key={dish.id} name={dish.name} price={dish.price} img={dish.url} ingredients={dish.ingredients}/>
                                </div>
                            </Col>
                        )}    
                    ) : null }
                </Row>
            </div>
        </>
    )
}

export default ItemDetail