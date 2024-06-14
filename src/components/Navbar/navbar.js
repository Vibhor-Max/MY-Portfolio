import React, { useState } from "react";
import './navbar.css';
import logo from "../../assets/portfolio.png";
import menu from "../../assets/options.png";
import contactImg from "../../assets/contact-us.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="navbar">
            <img src={logo} alt = "logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">Portfolio</Link>
                <Link activeClass="active" to="client" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={ () => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                <img src={contactImg}  
                alt = "contactMe" className="desktopMenuImg"/>  Contact  Me
            </button>
            <img src={menu} alt = "menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="itemList" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="itemList" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="itemList" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="client" spy={true} smooth={true} offset={-50} duration={500} className="itemList" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="itemList" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;