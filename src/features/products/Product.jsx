import styled from "styled-components";
import product1 from "../../data/images/product-1.png";
import BackButton from "../../ui/BackButton";
import iconFavorites from "../../data/images/bookmark.svg";
import Button from "../../ui/Button";
import Display from "../../ui/Display";
import CurrentQuantity from "../../ui/CurrentQuantity";
import { getSingleProduct } from "../../services/apiProducts";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi2";
import { addItemToLocalCart } from "../../services/apiCart";

const StyledProduct = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100dvh;

  .added {
    background-color: red;
  }

  .imgContainer {
    position: relative;
    /* width: 100%; */
    height: 45rem;
    /* border: 1px solid red; */

    .img {
      height: 100%;
      width: 100%;
    }
  }

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

    h3 {
      font-family: "Gelasio", sans-serif;
      font-size: 2.4rem;
    }

    span {
      display: flex;
      justify-content: space-between;
      h2 {
        color: var(--black-color);
        font-size: 3rem;
      }
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
      width: 7rem;
      border-radius: 1rem;
      /* background: var(--grey-color); */

      svg {
        width: 2.4rem;
        height: 2.4rem;
        /* color: #ddd; */
      }
    }
  }
`;
export async function loader({ params }) {
  const id = params.id;
  const productItem = await getSingleProduct(id);
  return productItem;
}

export default function Product() {
  const productItem = useLoaderData();
  const { id } = useParams();
  // console.log(productItem);
  const { name, price, description, image } = productItem;
  const [added, setAdded] = useState(false);

  function toggleFavorite() {
    setAdded((a) => !a);
  }

  function addToCart() {
    // console.log("added");
    addItemToLocalCart(id);
  }

  return (
    <StyledProduct>
      <Display>
        <div className="imgContainer">
          <BackButton className="top" />
          <img src={image} alt="" className="img" />
        </div>

        <div className="details">
          <h3>{name}</h3>

          <span>
            <h2>$ {price}</h2>
            <CurrentQuantity />
          </span>

          <p>{description}</p>
        </div>
      </Display>

      <div className="bottom">
        <div className={`${added && "added"}`} onClick={toggleFavorite}>
          {/* <img src={iconFavorites} alt="" /> */}
          <HiOutlineBookmark />
        </div>
        <Button onClick={addToCart} padding="large">
          Add to cart
        </Button>
      </div>
    </StyledProduct>
  );
}
