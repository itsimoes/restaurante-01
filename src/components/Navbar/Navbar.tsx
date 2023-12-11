import React from "react";
import "./style.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="navbar_container">
        <h3 className="navbar_logo">SUA LOGO AQUI</h3>
        <Link to="subscribe" smooth spy className="navbar_link">INSCREVA-SE!</Link>
      </div>
    </div>
  );
};

export default Navbar;
