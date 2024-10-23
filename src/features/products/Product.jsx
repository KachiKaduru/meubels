import { useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import styled from "styled-components";

import { getSingleProduct } from "../../services/apiProducts";
import { addItemToCart } from "../../services/apiCart";

import { HiOutlineBookmark } from "react-icons/hi2";
import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";
import Display from "../../ui/Display";
import CurrentQuantity from "../../ui/CurrentQuantity";

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

  return { productItem };
}

export default function Product() {
  const { id } = useParams();
  const { productItem } = useLoaderData();
  const { name, price, description, image } = productItem;
  const cart = useSelector((state) => state.cart.cart);
  const isInCart = cart.some((item) => item.product_id === id);

  const [quantity, setQuantity] = useState(1);

  function addToCart() {
    addItemToCart(id, quantity);
    console.log(id, quantity);
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
            {isInCart || <CurrentQuantity setOuterQuantity={setQuantity} />}
          </span>

          <p>{description}</p>
        </div>
      </Display>

      <div className="bottom">
        <div>
          <HiOutlineBookmark />
        </div>

        <Button onClick={addToCart} padding="large" disabled={isInCart}>
          {`${isInCart ? "Added to cart" : "Add to cart"}`}
        </Button>
      </div>
    </StyledProduct>
  );
}
