import styled from "styled-components";
import img1 from "../../data/images/product-1.png";

const StyledItem = styled.div`
  img {
    height: 20rem;
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    object-position: top right;
  }

  div {
    border: 1px solid #ddd;
  }
`;

export default function ProductItem() {
  return (
    <StyledItem>
      <img src={img1} alt="" />

      <div>
        <p>Black Sample lamp</p>
        <h4>$ 12.00</h4>
      </div>
    </StyledItem>
  );
}
