import { Link } from "react-router-dom";
import logo from "../assets/images/BellartLogo.png"
import cart from "../assets/images/shopping-cart_10440206.png"

import "./Navbar.scss"

const Navbar = () => {
  return (
  <div className="Navbar-container">
    <div className="navbar-logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
       </ul>
       <div className="cart">
        <img className="cartImage" src={cart} alt="imge" />
       </div>
        
    </nav>
      
  </div>
  );
};

export default Navbar;
