import { Form, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import store from "../store";
import { getCartItems, insertItemsToCart, syncCartWithSupabase } from "../services/apiCart";
import { getUserId } from "../utils/helpers";
import { updateTotalCartPrice } from "../features/cart/cartSlice";
import BackButton from "../ui/BackButton";
import BarHeader from "../ui/BarHeader";
import Item from "../ui/Item";
import Button from "../ui/Button";
import Layout from "../ui/Layout";
import Display from "../ui/Display";
import Navbar from "../ui/Navbar";

const Footer = styled.footer`
  padding: 1rem 0.5rem;
  border-top: 1px solid var(--grey-color);
  display: grid;
  gap: 1rem;
  /* box-shadow: 0 0 1.5rem 0.1rem var(--grey-color); */

  .total {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;

    h3 {
      color: var(--grey-color);
      font-size: 2rem;
    }

    .price {
      color: var(--black-color);
    }
  }
`;

export async function loader() {
  store.dispatch(updateTotalCartPrice());
  return null;
}

export async function action({ request }) {
  const userId = getUserId();
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const cart = JSON.parse(data.cart);

  if (!userId) return redirect("/login");

  syncCartWithSupabase(cart, userId);

  const updatedCart = await getCartItems(userId);
  const totalCartPrice = updatedCart.reduce((total, item) => total + item.total_price, 0);

  return redirect("/checkout", { state: { totalCartPrice } });
}

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);

  return (
    <section>
      <Layout type="cart">
        <BarHeader>
          <BackButton />
          <h4>My cart</h4>
        </BarHeader>

        <Display>
          {cart.length < 1 && <p style={{ textAlign: "center" }}>No items in your cart yet!</p>}

          {cart.map((item) => (
            <Item
              key={item.product_id}
              productId={item.product_id}
              productQuantity={item.quantity}
              productPrice={item.total_price}
            />
          ))}
        </Display>

        {cart.length > 0 && (
          <Footer>
            <aside className="total">
              <h3>Total: </h3>
              <h3 className="price">$ {totalCartPrice}.00 </h3>
            </aside>

            <Form method="POST">
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
              <Button padding="large">Check out</Button>
            </Form>
          </Footer>
        )}

        <Navbar />
      </Layout>
    </section>
  );
}
