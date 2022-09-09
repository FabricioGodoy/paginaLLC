import "./navbar.css";
import logo from "../../images/logos/logo-sn.png";
import banderaArg from "../../images/logos/banderaArg.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="logo navbar" className="logoNavBar" />
      </a>

      
        <ul
          className={isMobile ? "nav-Links-mobile" : "nav-Links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="homeNavBar">
            <li>HOME</li>
          </Link>
          {/* <Link to="/" className="brandsNavBar">
            <li>BRANDS⇩</li>
          </Link>
          <Link to="/" className="saleProductsNavBar">
            <li>SALE PRODUCTS</li>
          </Link> */}
          <Link to="/Contact" className="messageNavBar">
            <li>MESSAGE</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon"
          onClick={() => {setIsMobile(!isMobile)}}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
    
    </nav>
  );
};

export default Navbar;
