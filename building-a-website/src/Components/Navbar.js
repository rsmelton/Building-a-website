import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import dragonsBrewLogoImage from '../images/dragonsBrewLogoImage.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={dragonsBrewLogoImage} alt='logo image' width={130} height={80} />
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className="navbar-item"><a href="/#about">About</a></li>
                    <li className="navbar-item"><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
