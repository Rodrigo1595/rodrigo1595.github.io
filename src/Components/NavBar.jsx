import React, { useState } from 'react';
import logo from '../images/siluetasv1logo.png'
import AnchorLink from "react-anchor-link-smooth-scroll"


function NavBar() {

    const [nav, setNav] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>

            <AnchorLink href='#about' className='logo'><img src={logo} alt="" /></AnchorLink>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><AnchorLink href='#about'>Inicio</AnchorLink></li>
                <li><AnchorLink href='#feature'>Beneficios</AnchorLink></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="https://www.youtube.com">Youtube</a></li>
            </ul>
        </nav>
    )
}

export default NavBar