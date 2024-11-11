import styled from "styled-components";
import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import { useLoaderData, useParams } from "react-router-dom";
import { getSingleOrder } from "../../services/apiOrders";
import { formatNumber } from "../../utils/helpers";

const StyledOrderDetails = styled.section`
  display: grid;
  gap: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-family: "Merriweather", serif;

    em {
      font-style: normal;
      font-family: monospace;
    }
  }

  .section {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 0 0.7rem 1px #bababa;
    border-radius: 1rem;

    h3 {
      width: fit-content;
      margin: auto;
      border-bottom: 2px solid var(--primary-color);
    }

    .items {
      margin-top: 1rem;
      display: grid;
      gap: 1rem;

      .item {
        border-bottom: 2px solid #bababa;
        /* border: 1px solid red; */
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 1fr 0.3fr 0.2fr 0.3fr;
        align-content: center;
      }

      .quantity {
        justify-self: center;
      }
    }

    .total {
      display: flex;
      justify-content: space-between;
      h4 {
        font-size: 1.8rem;
      }
    }
  }
`;

export async function loader({ params }) {
  const { orderID } = params;
  const order = await getSingleOrder(orderID);

  return { order };
}

export default function OrderDetails() {
  const { orderID } = useParams();
  const { order } = useLoaderData();
  const { order_cart: cart, total_price: overallPrice } = order;
  //   console.log(cart, overallPrice);

  return (
    <StyledOrderDetails>
      <BarHeader>
        <BackButton />
        <h4>order details</h4>
      </BarHeader>

      <h2>
        Details of Order #<em>{orderID}</em>
      </h2>

      <section className="section">
        <h3>Order Item{cart.length > 1 ? "s" : ""}</h3>
        <div className="items">
          {cart.map((item) => (
            <div className="item" key={item.id}>
              <h4>{item.product_name}</h4>
              <p>${formatNumber(item.unit_price)}</p>
              <p className="quantity">{item.quantity}</p>
              <h4>${formatNumber(item.total_price)}</h4>
            </div>
          ))}
        </div>

        <div className="total">
          <h4>Total: </h4>
          <h4>${formatNumber(overallPrice)}.00</h4>
        </div>
      </section>
    </StyledOrderDetails>
  );
}
