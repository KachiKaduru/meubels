import styled from "styled-components";
import BackButton from "../ui/BackButton";
import BarHeader from "./BarHeader";
import Item from "../ui/Item";
import Button from "../ui/Button";

const arr = [1, 2, 3, 4, 5, 6];

const StyledCart = styled.section`
  padding: 0 2rem;
  height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  .display {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: auto;
  }

  .total {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default function Cart() {
  return (
    <StyledCart>
      <BarHeader>
        <BackButton />
        <span>My cart</span>
      </BarHeader>

      <div className="display">
        {arr.map((item) => (
          <Item key={item} type={"cart"} />
        ))}
      </div>

      <div className="bottom">
        <aside className="total">
          <p>Total: </p>
          <p>$95.00 </p>
        </aside>
        <Button padding="large">Check out</Button>
      </div>
    </StyledCart>
  );
}
