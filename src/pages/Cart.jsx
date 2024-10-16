import styled from "styled-components";
import BackButton from "../ui/BackButton";
import BarHeader from "../ui/BarHeader";
import Item from "../ui/Item";
import Button from "../ui/Button";
import Layout from "../ui/Layout";
import Display from "../ui/Display";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Bottom = styled.footer`
  padding: 1rem 0.5rem;
  border-top: 1px solid var(--grey-color);
  display: grid;
  gap: 1rem;
  /* box-shadow: 0 0 1.5rem 0.1rem var(--grey-color); */

  .total {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;

    h3 {
      color: var(--grey-color);
      font-size: 2rem;
    }

    .price {
      color: var(--black-color);
    }
  }
`;

export default function Cart() {
  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <h4>My cart</h4>
        </BarHeader>

        <Display>
          {arr.map((item) => (
            <Item key={item} type={"cart"} />
          ))}
        </Display>

        <Bottom>
          <aside className="total">
            <h3>Total: </h3>
            <h3 className="price">$95.00 </h3>
          </aside>
          <Button padding="large">Check out</Button>
        </Bottom>
      </Layout>
    </section>
  );
}
