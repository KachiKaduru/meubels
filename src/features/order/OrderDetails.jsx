import styled from "styled-components";
import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import { useLoaderData, useParams } from "react-router-dom";
import { getSingleOrder } from "../../services/apiOrders";

const StyledOrderDetails = styled.section`
  .section {
    display: grid;
    gap: 1rem;

    div {
      border: 1px solid red;
      display: grid;
      gap: 0.5rem;
      grid-template-columns: 1.5fr 0.25fr 0.25fr;
      align-content: center;
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
      </BarHeader>

      <h2>Order Details of #{orderID}</h2>

      <h4>Order Items</h4>

      <section className="section">
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.product_name}</p>
            <p>{item.unit_price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}

        <span>total: {overallPrice}</span>
      </section>
    </StyledOrderDetails>
  );
}
