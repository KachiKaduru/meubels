import styled from "styled-components";
import BackButton from "../ui/BackButton";
import BarHeader from "../ui/BarHeader";
import Item from "../ui/Item";
import Button from "../ui/Button";
import Layout from "../ui/Layout";
import Display from "../ui/Display";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Bottom = styled.footer`
  padding: 1rem 0;
  border: 1px solid green;
  display: grid;
  gap: 1rem;

  .total {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default function Cart() {
  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <span>My cart</span>
        </BarHeader>

        <Display>
          {arr.map((item) => (
            <Item key={item} type={"cart"} />
          ))}
        </Display>

        <Bottom>
          <aside className="total">
            <p>Total: </p>
            <p>$95.00 </p>
          </aside>
          <Button padding="large">Check out</Button>
        </Bottom>
      </Layout>
    </section>
  );
}
