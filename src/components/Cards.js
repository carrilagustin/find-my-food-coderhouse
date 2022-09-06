import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Cards = (dish) => {

    const { id, name, img, price, ingredients } = dish;


    return (
        <>
            <Card style={{ width: '18rem', height: '26rem', marginBottom: '20px', marginLeft: '10px' }}>
                <Card.Img style={{ width: 'auto', height: '17rem'}} variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>{ingredients}</Card.Text>
                        <Link to={`/item/${id}`}>
                            <Button variant="primary">Information</Button>
                        </Link>
                    </Card.Body>
            </Card>        
        </>
    );
}

export default Cards