import styled from "styled-components";
import product1 from "../../data/images/product-1.png";
import BackButton from "../../ui/BackButton";
import iconFavorites from "../../data/images/bookmark.svg";
import Button from "../../ui/Button";
import Display from "../../ui/Display";
import CurrentQuantity from "../../ui/CurrentQuantity";

const StyledProduct = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100dvh;
  position: relative;

  .top {
    position: absolute;
    top: 4.5rem;
    left: 2rem;
    width: 4rem;
    height: 4rem;
    padding: unset;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0.1rem #ddd;
    display: grid;
    place-content: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;

    span {
      display: flex;
      justify-content: space-between;
    }
  }

  .bottom {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 0 0;

    div {
      border: 1px solid red;
      display: grid;
      place-content: center;
      width: 6rem;
      border-radius: 1rem;
      /* background: var(--grey-color); */

      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;

export default function Product() {
  return (
    <StyledProduct>
      <BackButton className="top" />

      <Display className="img-container">
        <img src={product1} alt="" />

        <div className="details">
          <h3>title</h3>

          <span>
            <p>$price</p>
            <CurrentQuantity />
          </span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a soluta corporis
            blanditiis non natus omnis quae accusantium quia labore mollitia atque obcaecati harum,
            saepe beatae tempore illum dicta, odit aliquid molestias perspiciatis! Natus, magni
            nulla blanditiis veritatis ratione consectetur enim, minima maxime iusto illum repellat
            provident ex dolores. Illo.
          </p>
        </div>
      </Display>

      <div className="bottom">
        <div>
          <img src={iconFavorites} alt="" />
        </div>
        <Button padding="large">Add to cart</Button>
      </div>
    </StyledProduct>
  );
}
