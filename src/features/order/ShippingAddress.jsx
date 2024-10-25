import styled from "styled-components";

const StyledShipping = styled.label`
  display: grid;
  gap: 1rem;

  div {
    width: 100%;
    padding: 1.5rem 0 0.5rem;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0.1rem var(--grey-color);
    /* background: var(--grey-color); */

    hr {
      margin: 1rem 0;
    }
    input,
    textarea {
      display: block;
      font-family: "Nunito sans";
      /* padding: 0 2rem; */
      width: 100%;
      border: none;
      /* border: 1px solid blue; */
    }

    input {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--black-color);
      text-transform: capitalize;
      &:placeholder {
        color: var(--black-color);
      }
    }

    textarea {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--text-color);
    }
  }
`;

export default function ShippingAddress({ username }) {
  return (
    <StyledShipping>
      <legend>Shipping Address</legend>

      <div>
        <input type="text" name="name" placeholder="name" defaultValue={username} />
        <hr />
        <textarea name="deliveryAddress" required placeholder="address here" rows={3}></textarea>
      </div>
    </StyledShipping>
  );
}
