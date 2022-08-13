import React from 'react'
import './NavBar.css'
import logo from '../assets/img/logo.png'


function navBar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="Nav">
                <img src={logo} alt="logo" id="logo"/>
                    <a className="navbar-brand" href="/#" id="navTitle">Find My Food</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse offset-1" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Contact</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default navBar