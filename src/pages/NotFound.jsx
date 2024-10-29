import { Link } from "react-router-dom"
import "./notFound.scss"

const NotFound = () => {
  return (
      <div className="notfound-container">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <p>Volver al <Link to="/" className="home-link">inicio</Link></p>
      </div>
  );
}

export default NotFound;
