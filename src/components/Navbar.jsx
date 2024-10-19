import { Link } from "react-router-dom";
import logo from "../assets/images/pink  Simple Studio Logo.png"

import "./Navbar.scss"

const Navbar = () => {
  return (
  <div className="Navbar-container">
    <div className="navbar-logo">
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>
    </div>
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
       </ul>
    </nav>
  </div>
  );
};

export default Navbar;
