import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import NikeLogo from "../../Img/nike-logo.png"

function NavBar() {
  return (
    <header>
      <nav className="navBar">
        <ul className="navList">
          <img src={NikeLogo} alt=" Nike Logo" className="NikeLogo" />
          <Link to="/" className="navLi">Products</Link>
          <Link to="/category/man" className="navLi">Man</Link>
          <Link to="/category/women" className="navLi">Women</Link>
          <Link to="/category/football" className="navLi">Football</Link>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;
