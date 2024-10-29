//Muestra detalles del producto obteniendo el id desde los query params.
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ListProductsContext } from "../context/ListProductsContext";

import "./ProductDetails.scss";
import NotFound from "../pages/NotFound";


const ProductDetails = () => {
  const listProducts = useContext(ListProductsContext)

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productId = query.get('id');
  const product = listProducts.find((p) => p.id === parseInt(productId));

 if (productId && !product) {
    return <NotFound/>;
  }

  return (
    <div className="container-ProductDetails">
      <div className="productimage">
        <img src={product.imagen} alt={product.nombre} className="image" />
      </div>
      <div className="productinfo">
        <h1 className="productName">{product.nombre}</h1>
        <p className="descriptionText">Descripción: </p>
        <p className="descriptionText">Año: {product.descripcion.año}</p>
        <p className="descriptionText">Material: {product.descripcion.material}</p>
        <p className="descriptionText">Tamaño: {product.descripcion.tamaño}</p>
        <div className="buyContainer"> 
          <p className="price">Precio: $ {product.precio}</p>
          <button className="buyButton">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
