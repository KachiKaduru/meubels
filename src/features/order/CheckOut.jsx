import styled from "styled-components";
import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";
import ShippingAddress from "./ShippingAddress";
import Display from "../../ui/Display";
import Layout from "../../ui/Layout";

const StyledCheckOut = styled.section`
  padding: 0 2rem 2rem;
  height: 100dvh;

  display: grid;
  grid-template-rows: auto 1fr auto;

  .display {
    overflow: auto;
  }
`;
export default function CheckOut() {
  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <h4>Check out</h4>
        </BarHeader>

        <Display>
          <ShippingAddress />
        </Display>

        <Button padding="large" uppercase={true}>
          Submit order
        </Button>
      </Layout>
    </section>
  );
}
