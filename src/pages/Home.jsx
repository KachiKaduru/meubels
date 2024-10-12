import styled from "styled-components";
import CategoriesList from "../features/homepage/CategoriesList";
import ProductsDisplay from "../features/homepage/ProductsDisplay";
import BarHeader from "../ui/BarHeader";
import SearchComponent from "../ui/SearchComponent";
import CartComponent from "../features/cart/CartComponent";
import Navbar from "../ui/Navbar";
import Display from "../ui/Display";
import Layout from "../ui/Layout";

const StyledHome = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;
  /* overflow-y: scroll; */
`;

export default function Home() {
  return (
    <section>
      <Layout>
        <BarHeader>
          <SearchComponent />
          <div>
            <span>make home</span>
            <p>beautiful</p>
          </div>
          <CartComponent />
        </BarHeader>

        <Display>
          <CategoriesList />
          <ProductsDisplay />
        </Display>

        <Navbar />
      </Layout>
    </section>
  );
}
