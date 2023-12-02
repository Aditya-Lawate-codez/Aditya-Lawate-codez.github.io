import React from 'react';
import IMAGES from '../assets/images/images';
import "./Navbar.css"
const NavBar = () => {
    return (
        <div>
            Navbar
            {/* Image */}
            <img src={IMAGES.image1} className='image'/>
        </div>
    );
};


export default NavBar;
