import React from 'react';
import './Navbar.css';
import dragonsBrewLogoImage from '../images/dragonsBrewLogoImage.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* <a href="#" className="navbar-logo">Dragon's Brew Coffee</a> */}
                <img src={dragonsBrewLogoImage} alt='logo image' width={130} height={80}/>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#">Home</a></li>
                    <li className="navbar-item"><a href="#">Menu</a></li>
                    <li className="navbar-item"><a href="#about">About Us</a></li>
                    <li className="navbar-item"><a href="#about">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
