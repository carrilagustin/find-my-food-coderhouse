import React from 'react'
import { Card, Container, Row, Col, CardImg } from 'react-bootstrap'
import './CardDetail.css'
import { Button } from 'react-bootstrap'

const CardDetail = (dish) => {
    

    const { id, name, img, price, ingredients } = dish;
    
    return (
        <>
        <Container className="d-flex" key={id}>
            <Row className="col-md-12 row2">
                <Col className="md-4">
                    <div>
                        <CardImg src={img} alt="dishExample"  style={{ width: '375px', height: '350px'}}/>
                    </div>
                </Col>
                <Col className="md-2">
                    {' '}
                </Col>
                <Col className="md-6 col2">
                    <div className="textDetail">
                        <h4>{name}</h4>
                        <br/>
                        <h5>Ingredients:</h5>
                        <p>{ingredients[0]}</p>
                        <p>{ingredients[1]}</p>
                        <p>{ingredients[2]}</p>
                        <p>{ingredients[3]}</p>
                        <p>{ingredients[4]}</p>
                        <br/>
                        <h4>{price}</h4>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CardDetail