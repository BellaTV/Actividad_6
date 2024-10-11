import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const listProducts = [
  {
    id: 1,
    nombre: 'sofa',
    precio: '$4000',
    img: "https://img.freepik.com/foto-gratis/ojos-brillaron-colores-vibrantes-hojas-otono-ia-generativa_8829-2921.jpg?t=st=1728552285~exp=1728555885~hmac=45423d0417945c155232ded4fa24bb1c6b5469616fc16117751a9d884a0f4586&w=360"
  },
  {
    id: 2,
    nombre: 'cama',
    precio: '$8000',
    img: "https://img.freepik.com/foto-gratis/hermosa-composicion-collage-vintage_23-2149479769.jpg?t=st=1728552366~exp=1728555966~hmac=b80efb1d48b0a8d9deb130f2a2d4f7fb36e7de65485c687f6fd6c348941cb786&w=360"
  },
  {
    id: 3,
    nombre: 'mueble',
    precio: '$4000',
    img: "https://img.freepik.com/foto-gratis/hermosa-composicion-collage-vintage_23-2149479770.jpg?t=st=1728552468~exp=1728556068~hmac=39a0268679825cfe9a0e9d8201882001d13a75c56832abb040527d07969e9ce3&w=360"
}
];

function Products() {
  return (
    <div>
      <Navbar/>
      <main className="container">
        <h1>Productos</h1>

            {listProducts.map(Product => (
              <div key={Product.id} className="product-containner">
                <img src={Product.img} alt={Product.nombre} className="product-image" />
                <div className="product-details">
                <h2>{Product.nombre}</h2>
                <p>{Product.precio}</p>
                <Link to={`/products?id=${Product.id}`}>Ver Detalles</Link>
              </div>
            </div>
            ))}
        
      </main>
      <footer>
        <p>© BellArt 2020- 2024 | Todos los derechos reservados</p>
      </footer>
       </div>
  )
}

export default Products;