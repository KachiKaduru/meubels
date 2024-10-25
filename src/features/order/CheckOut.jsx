import { Form, redirect, useLoaderData } from "react-router-dom";

import styled from "styled-components";

import { getProfileName } from "../../services/apiProfiles";
import { getCartItems, getOrderCartWithProductNames } from "../../services/apiCart";
import { calculateDeliveryPrice, generateOrderId, getUserId } from "../../utils/helpers";
import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";
import ShippingAddress from "./ShippingAddress";
import Display from "../../ui/Display";
import Layout from "../../ui/Layout";
import Mastercard from "../../ui/Mastercard";
import DhlCard from "../../ui/DhlCard";

const StyledCheckOut = styled(Layout)`
  .form {
    height: calc(100dvh - 8.5rem);
    display: grid;
    grid-template-rows: 1fr auto;

    button {
      margin: 2rem 0;
      font-size: 1.6rem;
    }

    .display {
      padding: 1rem;
      display: grid;
      gap: 3rem;
    }

    .order-table {
      display: grid;
      gap: 1rem;
      padding: 1.5rem 2rem;
      box-shadow: 0 0 1rem var(--grey-color);

      span {
        * {
          font-size: 1.8rem;
        }

        display: flex;
        justify-content: space-between;
        text-transform: capitalize;

        h4 {
          font-weight: 600;
        }
      }
    }

    .bottom {
      border-top: 1px solid var(--primary-color);
    }
  }
`;

export async function loader() {
  const user_id = getUserId();
  if (!user_id) return redirect("/");

  const userCart = await getCartItems(user_id);
  const username = await getProfileName(user_id);

  return { userCart, username };
}

export async function action({ request }) {
  const user_id = getUserId();
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { name } = data;
  const cart = JSON.parse(data.cart);
  const priceList = JSON.parse(data.priceList);

  console.log(name, cart, priceList);

  // const orderItems = {
  //   product_name: "",
  //   quantity: "",
  //   price: "",
  // };

  const orderItems = await getOrderCartWithProductNames(cart);
  console.log(orderItems);

  const orderId = generateOrderId();

  const newOrder = {
    order_id: orderId,
    user_id,
    order_items: orderItems,
    total_price: "",
    user_name: data.name,
  };

  return null;
  // return redirect("/success");
}

export default function CheckOut() {
  const { userCart, username } = useLoaderData();
  const totalCartPrice = userCart.reduce((total, item) => total + item.total_price, 0);
  const deliveryPrice = calculateDeliveryPrice(totalCartPrice);
  const orderPrice = totalCartPrice + deliveryPrice;

  return (
    <StyledCheckOut>
      <BarHeader>
        <BackButton />
        <h4>Check out</h4>
      </BarHeader>

      <Form method="POST" className="form">
        <Display className="display">
          <ShippingAddress username={username} />

          <Mastercard />

          <DhlCard />

          <div className="order-table">
            <span>
              <p>order: </p>
              <h4>$ {totalCartPrice}.00</h4>
            </span>

            <span>
              <p>delivery: </p>
              <h4> $ {deliveryPrice}.00</h4>
            </span>

            <span>
              <p>Total: </p>
              <h3>$ {orderPrice}.00</h3>
            </span>
          </div>
        </Display>

        <div className="bottom">
          <input
            type="hidden"
            name="priceList"
            value={JSON.stringify({ totalCartPrice, orderPrice })}
          />
          <input type="hidden" name="cart" value={JSON.stringify(userCart)} />
          <Button padding="large" uppercase={true}>
            Submit order
          </Button>
        </div>
      </Form>
    </StyledCheckOut>
  );
}
