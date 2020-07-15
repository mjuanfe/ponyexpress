import React, { Component } from 'react';
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import Arrowleft from '../icons/arrow-left.svg';

const Navigation = ({ sectionname }) => {
    return (
        <div className="navigation">
            <div className="navbar">
                <Link to="/"><Arrowleft className="navbar__LeftButton"></Arrowleft></Link>
                
                <h1 className="navbar__section">{sectionname}</h1>
                
            </div>
        </div>
    );
};

export default Navigation;


/*
<button className="navbar__RightButton">B</button>
<ArrowLeft></ArrowLeft>
<img className="navbar__LeftButton" src={arrowleft} alt="arrowleft" />
<nav className="navbarWrapper">
    <Link to="/cartatest">Carta</Link>
    <Link to="/contacto">Contacto </Link>
</nav>

<button className="navbar__LeftButton"><img src={arrowleft} alt="arrowleft" /></button>

class Navbar extends Component {
    render() {
        return (
        <div className="navitation">
            <div className="navbar">
                <button className="navbar__LeftButton">A</button>
                <h1 className="navbar__section">{this.props.sectionname}</h1>
                <button className="navbar__RightButton">B</button>
            </div>
            <nav className="navbarWrapper">
                <Link to="/cartatest">Carta</Link>
                <Link to="/contacto">Contacto </Link>
            </nav>
            <p>{window.location.href}</p>
            
        </div>
        );
    }
}

const Navbar = ({ props }) => {
    return (

    );
};
 
export default Navbar;


            <ul className="navbar">
                <li></li>
                <li></li>
            </ul>
<h3>{props.sectionName}</h3>
            */