import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Cards = (dish) => {
    
    const { id, name, img, price, ingredients } = dish;

    return (
        <>
            <Card style={{ width: '18rem', height: '26rem' }} key={id}>
                <Card.Img style={{ width: 'auto', height: '17rem'}} variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>{ingredients}</Card.Text>
                        <Button variant="primary">Information</Button>
                    </Card.Body>
            </Card>        
        </>
    );
}

export default Cards