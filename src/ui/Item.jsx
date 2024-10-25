import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";

import { getSingleProduct } from "../services/apiProducts";
import { deleteItemFromCart } from "../services/apiCart";
import { updateItemQuantity } from "../features/cart/cartSlice";

import addToCartBtn from "../data/images/shopping-bag-icon.svg";
import CurrentQuantity from "./CurrentQuantity";

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr 4rem;
  gap: 2rem;
  color: var(--primary-color);

  .imgContainer {
    width: 10rem;
    height: 10rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }

  .other {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span p {
      color: var(--text-color);
      font-weight: 600;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }
    span h4 {
      color: var(--black-color);
    }
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
    cursor: pointer;

    &:hover {
      svg {
        color: red;
      }
    }

    svg {
      width: 90%;
      height: 90%;
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

export default function Item({ type = "cart", productId, productQuantity, productPrice }) {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const { image, name } = product;

  function setItemQuantity(newQuantity) {
    dispatch(updateItemQuantity({ id: productId, newQuantity }));
  }

  useEffect(
    function () {
      async function getCartItem() {
        const item = await getSingleProduct(productId);
        if (item) setProduct(item);
      }
      getCartItem();
    },
    [productId]
  );

  return (
    <StyledItem>
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>

      <div className="other">
        <span>
          <p>{name}</p>
          <h4>$ {productPrice}</h4>
        </span>

        {type === "cart" && (
          <CurrentQuantity
            cartQuantity={productQuantity}
            setOuterQuantity={setItemQuantity}
            productId={productId}
          />
        )}
      </div>

      <aside>
        <span className="delete" onClick={() => deleteItemFromCart(productId)}>
          <HiOutlineTrash />
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
