import { Outlet, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import ProductsDisplay from "../features/homepage/ProductsDisplay";
import BarHeader from "../ui/BarHeader";
import SearchComponent from "../ui/SearchComponent";
import CartComponent from "../features/cart/CartComponent";
import Navbar from "../ui/Navbar";
import Display from "../ui/Display";
import Layout from "../ui/Layout";
import { getProducts, insertProducts } from "../services/apiProducts";
import { v4 as uuidv4 } from "uuid";
import { logout } from "../services/apiAuthentication";

const Div = styled.div`
  font-family: "Gelasio", sans-serif;
  font-size: 1.8rem;

  p {
    color: var(--grey-color);
    text-transform: capitalize;
  }

  h3 {
    text-transform: uppercase;
  }
`;

export async function loader() {
  const products = await getProducts();
  // console.log(products);
  return products;
}

export default function Home() {
  const products = useLoaderData();
  const guestId = uuidv4();
  console.log(guestId);

  function addObjects() {
    // insertProducts();
    // logout();
  }

  return (
    <section>
      <Layout>
        <BarHeader>
          <SearchComponent />
          <Div>
            <p>make home</p>
            <h3>beautiful</h3>
          </Div>
          <CartComponent />
        </BarHeader>
        {/* <button onClick={addObjects}>click me daddy!!!!!!!!!!!</button> */}
        <Display>
          <Outlet />
          <ProductsDisplay products={products} />
        </Display>

        <Navbar />
      </Layout>
    </section>
  );
}
