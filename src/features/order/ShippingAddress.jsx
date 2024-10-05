import styled from "styled-components";

const StyledShipping = styled.div`
  h4 {
    margin-bottom: 1rem;
  }

  div {
    border: 1px solid red;
    width: 100%;
    padding: 1.5rem 2rem 1rem;

    input,
    textarea {
      width: 100%;
    }
  }
`;

export default function ShippingAddress() {
  return (
    <StyledShipping>
      <h4>Shipping Address</h4>

      <div>
        <input type="text" placeholder="name" />
      </div>

      <div>
        <textarea placeholder="address here" rows={4}></textarea>
      </div>
    </StyledShipping>
  );
}
