import { Link } from "react-router-dom";

import { useContext } from "react";
import { ListProductsContext } from "../context/ListProductsContext";

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import "./products.scss";

const Products = () => {
  const listProducts = useContext(ListProductsContext);
    
  return (
    <>
      <h2 className="secondaryTitle">Catálogo de arte digital</h2>
      <p className="catalogIntroduction">Atrévete a dejar atrás las formas de arte tradicionales y descubre un mundo lleno de posibilidades con el arte digital. Explora obras gráficas, ilustrativas y tipográficas que desafían la creatividad y la innovación. Dale vida a tus espacios con piezas únicas que capturan la esencia del arte contemporáneo.</p>
      <div className="productGrid">
        {listProducts.map((product) => (
        <Link className="link-product-detail" to={`/productDetails?id=${product.id}` } key={product.id}>
        <Card shadow="sm" isPressable className="productContainer">
          <CardBody className="overflow-visible p-0 cardImg">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              height={"50dvh"}
              alt={product.nombre}
              className="w-full object-cover h-[140px]"
              src={product.imagen}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{product.nombre}</b>
            <p className="text-default-500">$ {product.precio}</p>
          </CardFooter>
        </Card>
      </Link>
      ))}
      </div>
    </>
  );
}

export default Products;
