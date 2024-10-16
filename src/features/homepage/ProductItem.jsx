import styled from "styled-components";
import img1 from "../../data/images/product-1.png";
import { useNavigate } from "react-router-dom";

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

export default function ProductItem({ item }) {
  const { image, name, price } = item;
  const navigate = useNavigate();

  function handleProductDisplay() {
    navigate("product/1");
  }

  return (
    <StyledItem onClick={handleProductDisplay}>
      <img src={image} alt="" />

      <div>
        <p>{name}</p>
        <h4>$ {price}</h4>
      </div>
    </StyledItem>
  );
}
