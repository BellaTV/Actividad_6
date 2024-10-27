import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ListProductsContext } from "../context/ListProductsContext";

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import "./products.scss";

const Products = () => {
  const listProducts = useContext(ListProductsContext);
    
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <h2>Arte digital</h2>
        <p>Step away from traditional art forms and explore the possibilities of digital art. Discover graphic, illustrative and typographic art.</p>
        <div className="productGrid">
          {listProducts.map((product) => (
          <Link className="link-product-detail" to={`/productDetails?id=${product.id}` } key={product.id}>
          <Card shadow="sm" isPressable className="productContainer">
            <CardBody className="overflow-visible p-0 cardImg">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={product.nombre}
                className="w-full object-cover h-[140px]"
                src={product.imagen}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{product.nombre}</b>
              <p className="text-default-500">{product.precio}</p>
            </CardFooter>
          </Card>
        </Link>
        ))}
        </div>
        </main>    
      <footer>
        <p>© BellArt 2020- 2024 | Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default Products;
