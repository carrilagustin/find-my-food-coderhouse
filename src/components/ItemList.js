import React from 'react'
import './ItemList.css'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from './Cards'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ItemList = () => {

    const { dishType } = useParams();
    
    const [dish, setDish] = useState([]);

    const URL = "http://localhost:8000/dish"

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        if(dishType === undefined){
            setDish(data);
        } else {
            const nuevaLista = data.filter(dish => dish.category === dishType)
            
            setDish(nuevaLista);

            console.log('nueva lista',nuevaLista);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            
            showData();
        }, 1000)
    }, [dishType])
    

    return (
        <>
            <div className="show">
                <Row>
                    {dish.map((dish, i) => {
                        return (
                            <Col key={dish.id}>
                                <div key={i}>
                                    <Cards id={dish.id} name={dish.name} price={dish.price} img={dish.url}/>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}


export default ItemList