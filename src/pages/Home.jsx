import styled from "styled-components";
import CategoriesList from "../features/homepage/CategoriesList";
import Header from "../features/homepage/Header";
import ProductsDisplay from "../features/homepage/ProductsDisplay";
import BarHeader from "./BarHeader";
import SearchComponent from "../ui/SearchComponent";
import CartComponent from "../ui/CartComponent";

const StyledHome = styled.div`
  /* overflow-y: scroll; */
`;

export default function Home() {
  return (
    <StyledHome>
      <BarHeader>
        <SearchComponent />
        <div>
          <span>make home</span>
          <p>beautiful</p>
        </div>
        <CartComponent />
      </BarHeader>
      {/* <Header /> */}
      <CategoriesList />

      <ProductsDisplay />
    </StyledHome>
  );
}
