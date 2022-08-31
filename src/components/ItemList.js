import React from 'react'
import './ItemList.css'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from './Cards'
import { Row, Col } from 'react-bootstrap'

function ItemList() {
    
    const dishes = [
        {
            "id": 1,
            "name": "Hamburger TNT",
            "price": "$250",
            "img": "https://betterbegrilled.com/wp-content/uploads/2019/03/20190322_210110-2-1-520x520.jpg",
            "ingredients": ["Bun", "Meat", "Abanero", "Cheddar"],
            "rating": "5 stars"
        },
        {
            "id": 2,
            "name": "Vegan Burger",
            "price": "$300",
            "img": "https://www.sainsburysmagazine.co.uk/uploads/media/2400x1800/09/9289-Vegan-burger.jpg?v=1-0",
            "ingredients": ["Bun", "Beyond Meat", "Avocado", "Onion"],
            "rating": "5 stars"
        }
    ];

    const [dish, setDish] = useState([]);

    const delay = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dishes);
            }, 2000);
        });
    }
    
    useEffect(() => {
        
        const resultadoDelay = async() => {
            try {
                const cardDishes = await delay();
                setDish(cardDishes);
            } catch (error) {
                console.log("Error!")
            }
        }
        resultadoDelay();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>
            <div className="show">
                <Row>
                    {dish.map((dish) => {
                        return (
                            <Col>
                                <div>
                                    <Cards key={dish.id} name={dish.name} price={dish.price} img={dish.img}/>
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