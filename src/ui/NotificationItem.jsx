import styled from "styled-components";
import { formatDate } from "../utils/helpers";
import { useEffect, useState } from "react";
import { getSingleOrder } from "../services/apiOrders";

import successBag from "../data/images/success-bag.png";

const StyledNotification = styled.div`
  padding: 0 0.5rem;

  section {
    padding: 0.2rem 1rem;
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 1rem;
    box-shadow: 0 0.4rem 1rem #ddd;
  }

  .imgContainer {
    width: 5rem;
    height: 5rem;
    align-self: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    h4 {
      font-size: 1.2rem;
      color: var(--black-color);
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: var(--text-color);
    }

    .date {
      align-self: end;
      font-style: oblique;
    }
  }

  @media (min-width: 767px) {
    .details h4 {
      font-size: 1.6rem;
    }
    .details p {
      font-size: 1.3rem;
    }
  }
`;

export default function NotificationItem({ orderId, orderDate, onClick }) {
  const date = formatDate(orderDate);
  const [cartOrder, setCartOrder] = useState([]);
  const totalQuantity = cartOrder.reduce((total, item) => total + item.quantity, 0);

  useEffect(
    function () {
      async function getOrderItem() {
        const item = await getSingleOrder(orderId);
        if (item) {
          setCartOrder(item.order_cart);
        }
      }
      getOrderItem();
    },
    [orderId]
  );

  return (
    <StyledNotification onClick={onClick}>
      <section>
        <div className="imgContainer">
          <img src={successBag} alt="" />
        </div>

        <div className="details">
          <h4>
            Your order
            <strong> {orderId} </strong>
            has been confirmed
          </h4>

          <p>
            Your order of <strong>{cartOrder.length}</strong> products with a total quantity of {""}
            <strong>{totalQuantity}</strong> items have been received.
          </p>

          <p className="date">{date}</p>
        </div>
      </section>
    </StyledNotification>
  );
}
