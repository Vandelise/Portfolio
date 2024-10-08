import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link as ScrollLink} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
           <ScrollLink activeClass='active' to='intro' smooth={true} offset={-100} duration={500}><img src={logo} alt="logo" className="logo" /></ScrollLink>
            <div className="desktopMenu">
                <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</ScrollLink>
                <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Me</ScrollLink>
                <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</ScrollLink>
                <ScrollLink activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Services</ScrollLink>

            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</ScrollLink>
                <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About Me</ScrollLink>
                <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</ScrollLink>
                <ScrollLink activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Services</ScrollLink>
                <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</ScrollLink>


            </div>
        </nav>
    )
    
}

export default Navbar;