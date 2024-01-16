import React from 'react';
import logo from '../../assets/logo.png';
import Img from '../../assets/contact.png';
import {Link} from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <ul className="links">     
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#works'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
          <button className="desktopMenuBtn">
          <img  src={Img} className="desktopMenuImg"/>Contact Me</button>
    </nav>
  )
}

export default Navbar