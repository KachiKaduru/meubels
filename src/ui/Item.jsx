import styled from "styled-components";
import img2 from "../data/images/product-2.png";
import deleteBtn from "../data/images/delete-btn.svg";
import addToCartBtn from "../data/images/shopping-bag-icon.svg";
import CurrentQuantity from "./CurrentQuantity";

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr 4rem;
  gap: 2rem;
  border: 1px solid red;

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
    padding: 0.7rem 0;
    align-items: center;
  }

  .delete,
  .add {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .delete {
    width: 2.4rem;
    height: 2.4rem;

    img {
      width: 85%;
      height: 85%;
    }
  }

  .add {
    width: 3.4rem;
    border: none;
    height: 3.4rem;
    border-radius: 1rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
    }
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
        <span className="delete">
          <img src={deleteBtn} alt="delete" />
        </span>

        {type === "favorites" && (
          <button className="add">
            <img src={addToCartBtn} alt="add" />
          </button>
        )}
      </aside>
    </StyledItem>
  );
}
