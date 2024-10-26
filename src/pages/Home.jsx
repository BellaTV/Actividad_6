import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import imageBanner from "../assets/images/banner-image.jpg"

function Home() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main className="container">
      <section className="banner">
        <div className="banner-text">
          <h1>Bienvenido a BellArt</h1>
          <p>Elige entre miles de obras de arte digital exclusivas.</p> 
          <Link to="/products"> ¡Compra ahora! </Link> 
        </div>
        <div className="banner-image">
          <img className="imagebanner" src={imageBanner} alt="imgage banner" />
        </div>
      </section>
    </main>  
    <footer>
      <p>© BellArt 2020- 2024 | Todos los derechos reservados</p>
    </footer>
    </>
  );
};

export default Home;