import { Outlet, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import ProductsDisplay from "../features/homepage/ProductsDisplay";
import BarHeader from "../ui/BarHeader";
import SearchComponent from "../ui/SearchComponent";
import Navbar from "../ui/Navbar";
import Display from "../ui/Display";
import Layout from "../ui/Layout";
import { getProducts } from "../services/apiProducts";
import { useSelector } from "react-redux";
import FavoritesComponent from "../features/cart/FavoritesComponent";

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
  return products;
}

export default function Home() {
  const products = useLoaderData();
  const user = useSelector((state) => state.user);

  return (
    <section>
      <Layout>
        <BarHeader>
          <SearchComponent />
          <Div>
            <p>make home</p>
            <h3>beautiful</h3>
          </Div>
          <FavoritesComponent />
        </BarHeader>
        <Display>
          <ProductsDisplay products={products} />
        </Display>

        <Navbar />
      </Layout>
    </section>
  );
}
