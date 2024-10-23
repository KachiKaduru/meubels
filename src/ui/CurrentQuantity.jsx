import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1.8rem;
    font-weight: 600;
  }

  button {
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.6rem;
    border: 1px solid #ddd;
  }
`;

export default function CurrentQuantity({ setOuterQuantity, cartQuantity }) {
  const [quantity, setQuantity] = useState(cartQuantity || 1);

  function handleIncrease(q) {
    if (quantity > 9) return;
    setQuantity(q + 1);
    if (cartQuantity) {
      setOuterQuantity(cartQuantity + 1);
    } else {
      setOuterQuantity(q + 1);
    }
  }

  function handleDecrease(q) {
    if (quantity === 1) return;
    setQuantity(q - 1);
    if (cartQuantity) {
      setOuterQuantity(cartQuantity - 1);
    } else {
      setOuterQuantity(q - 1);
    }
  }

  return (
    <StyledDiv>
      <button onClick={() => handleDecrease(quantity)}>-</button>
      <span>0{quantity}</span>
      <button onClick={() => handleIncrease(quantity)}>+</button>
    </StyledDiv>
  );
}
