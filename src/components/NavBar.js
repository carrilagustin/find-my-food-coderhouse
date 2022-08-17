import React from 'react'
import './NavBar.css'
import logo from '../assets/img/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'


function navBar() {
    return (
        <>
            <Navbar className='bg-dark' expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="FMF logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Brand className="text-white">Find My Food</Navbar.Brand>
                    {' '}, {' '}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#Menu">Menu</Nav.Link>
                                <Nav.Link href="#About">About</Nav.Link>
                                <Nav.Link href="#">Contact us</Nav.Link>
                            </Nav>
                            <CartWidget />
                        </Navbar.Collapse>
                </Container>
            </Navbar>

            <ItemListContainer />
        </>
    );
}

export default navBar;