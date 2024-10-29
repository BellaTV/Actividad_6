import { Link } from "react-router-dom";

import imageBanner from "../assets/images/banner-image.jpg"
import "../pages/home.scss"

function Home() {
  return (
    <>
      <section className="banner">
        <div className="banner-text">
          <h1>Descubre la esencia del arte digital en BellArt</h1>
          <p>Arte digital que inspira y emociona.</p> 
          <Link className="collectionLink" to="/products"> ¡Explora nuestra colección! </Link> 
        </div>
        <div className="banner-image">
          <img className="imagebanner" src={imageBanner} alt="imgage banner" />
        </div>
      </section>
    </>
  );
};

export default Home;