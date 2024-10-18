import Navbar from "../components/Navbar";
import styled from 'styled-components';
import BannerImage from "../assets/images/acuarelaojos.jpg";
import { Link } from "react-router-dom";

const BannerStyle = styled.section`
  
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  height: 500px; 
  display: flex;
  align-items: center;
  justify-content: left;
  color: white; 

  
`;


function Home() {
  return (
    <div>
      <Navbar/>
      <main className="container">
        <h1>Home</h1>
        <p>Bienvenido a nuestra tienda</p>

      </main>
        <BannerStyle>
          <p>este es el baner de la</p>
          
          <Link to="/products">Ver galleria</Link>
        </BannerStyle>
          
      
      
      <footer>
          <p>© BellArt 2020- 2024 | Todos los derechos reservados</p>
        </footer>
  
    </div>
  )
}

export default Home;