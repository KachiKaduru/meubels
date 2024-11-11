import styled from "styled-components";
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

    p {
      /* font-size: 1.8rem; */
      /* border: 1px solid red; */
      /* font-weight: 600; */

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      overflow: hidden;
      /* text-overflow: ellipsis; */
      /* white-space: normal; */
    }
  }

  @media (min-width: 767px) {
    img {
      height: 24rem;
    }

    p {
      font-size: 1.8rem;
    }

    h4 {
      font-size: 1.8rem;
    }
  }
`;

export default function ProductItem({ item }) {
  const { image, name, price, id } = item;
  const navigate = useNavigate();

  function handleProductDisplay() {
    navigate(`/product/${id}`);
  }

  return (
    <StyledItem onClick={handleProductDisplay}>
      <img src={image} alt="" />

      <div>
        <p>{name}</p>
        <h4>$ {price}.00</h4>
      </div>
    </StyledItem>
  );
}
