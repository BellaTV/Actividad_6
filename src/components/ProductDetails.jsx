//Muestra detalles del producto obteniendo el id desde los query params.
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

import "./ProductDetails.scss"

const listProducts = [
  {
    id: 1,
    nombre: 'sofa',
    precio: '$4000',
    img: "https://img.freepik.com/foto-gratis/ojos-brillaron-colores-vibrantes-hojas-otono-ia-generativa_8829-2921.jpg?t=st=1728552285~exp=1728555885~hmac=45423d0417945c155232ded4fa24bb1c6b5469616fc16117751a9d884a0f4586&w=360",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto perferendis corrupti, debitis possimus esse maxime saepe unde. Nobis obcaecati magni reiciendis vel incidunt corporis ratione doloremque, esse quidem rerum."
  },
  {
    id: 2,
    nombre: 'cama',
    precio: '$8000',
    img: "https://img.freepik.com/foto-gratis/hermosa-composicion-collage-vintage_23-2149479769.jpg?t=st=1728552366~exp=1728555966~hmac=b80efb1d48b0a8d9deb130f2a2d4f7fb36e7de65485c687f6fd6c348941cb786&w=360",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto perferendis corrupti, debitis possimus esse maxime saepe unde. Nobis obcaecati magni reiciendis vel incidunt corporis ratione doloremque, esse quidem rerum."
  },
  {
    id: 3,
    nombre: 'mueble',
    precio: '$4000',
    img: "https://img.freepik.com/foto-gratis/hermosa-composicion-collage-vintage_23-2149479770.jpg?t=st=1728552468~exp=1728556068~hmac=39a0268679825cfe9a0e9d8201882001d13a75c56832abb040527d07969e9ce3&w=360",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto perferendis corrupti, debitis possimus esse maxime saepe unde. Nobis obcaecati magni reiciendis vel incidunt corporis ratione doloremque, esse quidem rerum."
}
];

const ProductDetails = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productId = query.get('id');
  const product = listProducts.find((p) => p.id === parseInt(productId));


  return (
    <div>
      <Navbar />
      <main className="container-ProductDetails">
        <div className="productimage">
          <img src={product.img} alt={product.nombre} className="productimage" />
        </div>
        <div className="productinfo">
          <h1>{product.nombre}</h1>
          <p>Precio: {product.precio}</p>
          <p>Descripción: {product.descripcion}</p>
        </div>
      </main>
      <footer className="footer">
        <p>© BellArt 2020-2024 | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default ProductDetails;
