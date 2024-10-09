import styled from "styled-components";
import BackButton from "../ui/BackButton";
import Item from "../ui/Item";
import BarHeader from "../ui/BarHeader";
import CartComponent from "../ui/CartComponent";
import Display from "../ui/Display";
import Layout from "../ui/Layout";
import Navbar from "../ui/Navbar";

const StyledFavorites = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  div {
    display: grid;
    gap: 2rem;
  }
`;

const arr = [1, 2, 3, 4, 5, 6];

export default function Favorite() {
  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <span>Favorites</span>
          <CartComponent />
        </BarHeader>

        <Display className="">
          {arr.map((item) => (
            <Item key={item} type={"favorites"} />
          ))}
        </Display>

        <Navbar />
      </Layout>
    </section>
  );
}
