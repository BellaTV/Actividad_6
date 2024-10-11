import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar/>
      <main className="container">
        <h1>Home</h1>
        <p>Bienvenido a nuestra tienda</p>

      </main>
      
      <footer>
          <p>© BellArt 2020- 2024 | Todos los derechos reservados</p>
        </footer>
  
    </div>
  )
}

export default Home;