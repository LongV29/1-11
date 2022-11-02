import React from 'react';
import "../Navbar/Navbar.scss"

function Navbar(props) {
    
    return (
            <div className="navbar">
                <div className="navbar_logo">
                    <h3>Digital Agency</h3>
                </div>
                <div className="navbar_menu">
                    <a href="#"><h4>home</h4></a>
                    <a href="#"><h4>About</h4></a>
                    <a href="#"><h4>Testimonials</h4></a>
                    <a href="#"><h4>contact</h4></a>
                </div>
                <div className="logo_menu">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>        
        
    );
}

export default Navbar;