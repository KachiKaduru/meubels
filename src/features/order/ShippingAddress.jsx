import styled from "styled-components";

const StyledShipping = styled.label`
  box-shadow: 0 0 1rem 0.1rem red;

  h4 {
    margin-bottom: 1rem;
  }

  div {
    /* border: 1px solid red; */
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
      <legend>Shipping Address</legend>

      <div>
        <input type="text" name="name" placeholder="name" />
      </div>

      <div>
        <textarea name="deliveryAddress" placeholder="address here" rows={4}></textarea>
      </div>
    </StyledShipping>
  );
}
