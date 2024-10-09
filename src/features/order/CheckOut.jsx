import styled from "styled-components";
import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";
import ShippingAddress from "./ShippingAddress";

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
    <StyledCheckOut>
      <BarHeader>
        <BackButton />
        <span>Check out</span>
      </BarHeader>

      <div className="display">
        <ShippingAddress />
      </div>

      <Button padding="large" uppercase>
        Submit order
      </Button>
    </StyledCheckOut>
  );
}
