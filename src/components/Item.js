import { data } from 'jquery'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from './Cards'

const Item = () => {
    
    const dishes = [
        {
            "id": 1,
            "name": "Hamburguer TNT",
            "price": "$250",
            "img": "https://betterbegrilled.com/wp-content/uploads/2019/03/20190322_210110-2-1-520x520.jpg",
            "ingredients": ["Bun", "Meat", "Abanero", "Cheddar"],
            "rating": "5 stars"
        },
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
    }, [])

    return (
        <>
            <div>
                {dish.map((dish, i) => {
                    return (
                        <div key={i}>
                            <Cards key={i} name={dish.name} price={dish.price} img={dish.img}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Item