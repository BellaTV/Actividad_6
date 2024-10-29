import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main className="container">
        <Outlet />
    </main>  
    <footer>
      <p>© BellArt 2020- 2024 | Todos los derechos reservados</p>
    </footer>
    </>
  );
};

export default MainLayout;