import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo2 from '../../assets/logo2.png';

const Navbar = () => {
    const [toggleMenu, SetToggleMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo2} alt='logo2'/>
            <h1>nftlanding</h1>
            <div className="links">
                <a href="/">Features</a>
                <a href="/">About</a>
                <a href="/">Launch</a>
                <a className="navbar-sign" href='/'>Sing Up</a>
            </div>
            <div className='menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => SetToggleMenu(false)}/>
                    :<RiMenu3Line color='#fff' size={27} onClick={() => SetToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='menu_container scale-up-center'>
                        <div className='menu_container-links'>
                            <a href="/">Features</a>
                            <a href="/">About</a>
                            <a href="/">Launch</a>
                            <a className="navbar-sign" href='/'>Sing Up</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>

    );
}
 
export default Navbar;