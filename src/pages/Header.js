import React from 'react';
import {Link} from 'react-router-dom';
import '../MyComponent_css/Header.css';

const Header = () => {
    return(
        <header className='header'>
            <div className='logo'>InsuranceCo</div>
            <nav>
                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;