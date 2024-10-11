//Muestra detalles del producto obteniendo el id desde los query params.

import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const listProducts = [
  { id: 1, nombre: 'Sofa', precio: '$4000', img: 'ruta/a/tu/imagen.jpg', descripcion: 'Un cómodo sofá.' },
  // Agrega más productos aquí
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductDetails() {
  const query = useQuery();
  const productId = query.get('id');
  const product = listProducts.find(p => p.id === Number(productId));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <Navbar />
      <main className="container">
        <h1>{product.nombre}</h1>
        <img src={product.img} alt={product.nombre} className="product-image" />
        <p>Precio: {product.precio}</p>
        <p>Descripción: {product.descripcion}</p>
      </main>
      <footer className="footer">
        <p>© BellArt 2020-2024 | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default ProductDetails;
