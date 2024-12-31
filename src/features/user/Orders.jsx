import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import { NavLink, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Display from "../../ui/Display";
import OrderItem from "./OrderItem";
import { getUserId } from "../../utils/helpers";
import { getUserOrders } from "../../services/apiOrders";
import Layout from "../../ui/Layout";

const StyledOrder = styled(Layout)`
  .container {
  }
`;

const StyledNavlink = styled(NavLink)`
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--disabled-color);
  text-decoration: none;

  &:active {
    color: var(--primary-color);
    font-weight: 700;
    border-bottom: 3px solid var(--black-color);
  }
`;

export async function loader() {
  const userId = getUserId();
  const orders = await getUserOrders(userId);

  return { orders };
}

export default function Orders() {
  const { orders } = useLoaderData();

  return (
    <Layout>
      <BarHeader>
        <BackButton />
        <h4>my order</h4>
      </BarHeader>

      <div className="container">
        <StyledNavlink>All</StyledNavlink>
        <StyledNavlink>Delivered</StyledNavlink>
        <StyledNavlink>Processing</StyledNavlink>
        <StyledNavlink>Cancelled</StyledNavlink>
      </div>

      <Display>
        {orders.map((item) => (
          <OrderItem
            key={item.id}
            orderId={item.order_id}
            cartOrder={item.order_cart}
            totalPrice={item.total_price}
            date={item.created_at}
          />
        ))}
      </Display>
    </Layout>
  );
}
