import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">Dragon's Brew Coffee</a>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#">Home</a></li>
                    <li className="navbar-item"><a href="#">Menu</a></li>
                    <li className="navbar-item"><a href="#">About Us</a></li>
                    <li className="navbar-item"><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
