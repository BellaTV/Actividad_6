//Muestra detalles del producto obteniendo el id desde los query params.
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ListProductsContext } from '../context/ListProductsContext';
import Navbar from './Navbar';

import "./ProductDetails.scss"



const ProductDetails = () => {
  const listProducts = useContext(ListProductsContext)

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productId = query.get('id');
  const product = listProducts.find((p) => p.id === parseInt(productId));


  return (
    <div>
      <Navbar />
      <main className="container-ProductDetails">
        <div className="productimage">
          <img src={product.imagen} alt={product.nombre} className="image" />
        </div>
        <div className="productinfo">
          <h1>{product.nombre}</h1>
          <p>Precio: {product.precio}</p>
          <p>Descripción: </p>
          <p>Año:{product.descripcion.año}</p>
          <p>Material:{product.descripcion.material}</p>
          <p>Tamaño:{product.descripcion.tamaño}</p>
        </div>
      </main>
      <footer className="footer">
        <p>© BellArt 2020-2024 | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default ProductDetails;
