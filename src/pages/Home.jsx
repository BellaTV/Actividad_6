import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";


function Home() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main className="container">
      <section className="banner">
        <div className="banner-text">
          <h1>Arte digital</h1>
        <Link to="/products">Ver galleria</Link>
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