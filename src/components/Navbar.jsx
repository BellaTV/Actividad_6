import { Link } from "react-router-dom";
import logo from "../assets/images/BellartLogo.png"

import "./Navbar.scss"

const Navbar = () => {
  return (
    <>
    <div className="Navbar-container">
      <div className="navbar-logo"><Link to="/home"><img src={logo} alt="logo"></img></Link></div>
      <nav className="navbar">
        <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </div>

    </>
  );
};

export default Navbar;