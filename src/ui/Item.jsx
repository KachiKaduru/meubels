import styled from "styled-components";
import img2 from "../data/images/product-2.png";
import CurrentQuantity from "./CurrentQuantity";

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr 4rem;
  gap: 2rem;

  img {
    width: 10rem;
    height: 10rem;
  }

  .other {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default function Item({ type = "cart" }) {
  return (
    <StyledItem>
      <img src={img2} alt="" />

      <div className="other">
        <span>
          <p>Coffee Table</p>
          <h4>$50.00</h4>
        </span>

        {type === "cart" && <CurrentQuantity />}
      </div>

      <aside>
        <button>close</button>
        {type === "favorites" && <button>add to cart</button>}
      </aside>
    </StyledItem>
  );
}
