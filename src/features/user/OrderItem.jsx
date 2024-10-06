import styled from "styled-components";

const StyledItem = styled.div`
  box-shadow: 0 0 1rem 0.01rem #000;
`;

export default function OrderItem() {
  return (
    <StyledItem>
      <header>
        <p>order number</p>

        <p>date</p>
      </header>

      <div>
        <p>
          Quantity: <strong>02</strong>
        </p>
        <p>
          Total Amount: <strong>$150</strong>
        </p>
        <button>detail</button>

        <p>delivered</p>
      </div>
    </StyledItem>
  );
}
