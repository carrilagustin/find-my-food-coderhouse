import React from 'react'
import './NavBar.css'
import logo from '../assets/img/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';


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
                    <Link style={{textDecoration: 'inherit', padding: '5px'}} to='/home'>
                        <Navbar.Brand className="text-white">Find My Food</Navbar.Brand>
                    </Link>
                    {' '}, {' '}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/home">Home </NavLink>
                                <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/category/meat">Meat </NavLink>
                                <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/category/vegan">Vegan </NavLink>
                                <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/">About </NavLink>
                                <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/">Contact us</NavLink>
                            </Nav>
                            <CartWidget />
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default navBar;