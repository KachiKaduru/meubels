import styled from "styled-components";
import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";
import ShippingAddress from "./ShippingAddress";
import Display from "../../ui/Display";
import Layout from "../../ui/Layout";
import { Form, redirect } from "react-router-dom";

const StyledCheckOut = styled(Layout)`
  .form {
    height: calc(100dvh - 8.5rem);
    display: grid;
    grid-template-rows: 1fr auto;

    button {
      margin: 2rem 0;
      font-size: 1.6rem;
    }

    .display {
      padding: 1rem;
    }
  }
`;

export default function CheckOut() {
  return (
    <StyledCheckOut>
      <BarHeader>
        <BackButton />
        <h4>Check out</h4>
      </BarHeader>

      <Form method="POST" className="form">
        <Display className="display">
          <ShippingAddress />

          {/* <input type="text" name="name" placeholder="your name" /> */}
          <input type="number" name="cardNumber" placeholder="your card details" />
        </Display>

        <input type="hidden" name="cart" value={"okay"} />
        <Button padding="large" uppercase={true}>
          Submit order
        </Button>
      </Form>
    </StyledCheckOut>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return redirect("/success");
}
