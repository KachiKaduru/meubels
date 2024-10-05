import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;

  button {
    width: 2.2rem;
    font-size: 2rem;
    text-align: center;
  }
`;

export default function CurrentQuantity() {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    if (quantity > 9) return;
    setQuantity((q) => q + 1);
  }

  function handleDecrease() {
    if (quantity === 1) return;
    setQuantity((q) => q - 1);
  }

  return (
    <StyledDiv>
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </StyledDiv>
  );
}
