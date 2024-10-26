import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import "./product.scss"

const Products = () => {
  const listProducts = [
    {
      id: 1,
      nombre: "sofa",
      precio: "$4000",
      img: "https://img.freepik.com/foto-gratis/ojos-brillaron-colores-vibrantes-hojas-otono-ia-generativa_8829-2921.jpg?t=st=1728552285~exp=1728555885~hmac=45423d0417945c155232ded4fa24bb1c6b5469616fc16117751a9d884a0f4586&w=360",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto perferendis corrupti, debitis possimus esse maxime saepe unde. Nobis obcaecati magni reiciendis vel incidunt corporis ratione doloremque, esse quidem rerum."
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
  },
  {
    id: 4,
    nombre: "sofa",
    precio: "$4000",
    img: "https://img.freepik.com/foto-gratis/ojos-brillaron-colores-vibrantes-hojas-otono-ia-generativa_8829-2921.jpg?t=st=1728552285~exp=1728555885~hmac=45423d0417945c155232ded4fa24bb1c6b5469616fc16117751a9d884a0f4586&w=360",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto perferendis corrupti, debitis possimus esse maxime saepe unde. Nobis obcaecati magni reiciendis vel incidunt corporis ratione doloremque, esse quidem rerum."
  },
  {
    id: 5,
    nombre: 'cama',
    precio: '$8000',
    img: "https://img.freepik.com/foto-gratis/hermosa-composicion-collage-vintage_23-2149479769.jpg?t=st=1728552366~exp=1728555966~hmac=b80efb1d48b0a8d9deb130f2a2d4f7fb36e7de65485c687f6fd6c348941cb786&w=360"
  },
  {
    id: 6,
    nombre: 'mueble',
    precio: '$4000',
    img: "https://img.freepik.com/foto-gratis/hermosa-composicion-collage-vintage_23-2149479770.jpg?t=st=1728552468~exp=1728556068~hmac=39a0268679825cfe9a0e9d8201882001d13a75c56832abb040527d07969e9ce3&w=360"
}
  ];

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
                src={product.img}
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
