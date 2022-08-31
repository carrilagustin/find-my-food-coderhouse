import React from 'react'
import Cards from './Cards'
import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import './ItemDetail.css'



const ItemDetail = () => {
    
    const [dish, setDish] = useState([]);

    const URL = "http://localhost:8000/dish"

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setDish(data);
    }

    useEffect(() => {
        setTimeout(() => {
            showData();

        }, 2000)
    }, [])



    return (
        <>
            <div className="show">
                <Row>
                    {dish.map((dish, i) => {
                        return (
                            <Col>
                                <div key={i}>
                                    <Cards key={dish.id} name={dish.name} price={dish.price} img={dish.url} ingredients={dish.ingredients}/>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

export default ItemDetail