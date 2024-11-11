import styled from "styled-components";
import Button from "../../ui/Button";
import { formatNumber, formatShortDate } from "../../utils/helpers";

const StyledItem = styled.div`
  /* border: 1px solid #ddd; */
  padding: 0.7rem;

  section {
    box-shadow: 0 0.4rem 1rem var(--grey-color);
  }

  header {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ddd;

    h4 {
      color: var(--primary-color);
    }

    p {
      color: var(--grey-color);
    }
  }

  .other {
    padding: 0.5rem 1rem 1rem;

    display: grid;
    grid-template-columns: 0.8fr 1.4fr;
    gap: 1.5rem 0;

    .status {
      color: #27ae60;
      place-self: end;
    }
  }
`;

export default function OrderItem({ orderId, cartOrder, totalPrice, date }) {
  const newDate = formatShortDate(date);
  const totalQuantity = cartOrder.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StyledItem>
      <section>
        <header>
          <h4>
            ID: <em>{orderId}</em>
          </h4>
          <p>{newDate}</p>
        </header>

        <div className="other">
          <p>
            Quantity: <strong>{totalQuantity}</strong>
          </p>
          <p>
            Total Amount: <strong>$ {formatNumber(totalPrice)}</strong>
          </p>
          <Button cover="half" padding="small" type="link" route={orderId}>
            details
          </Button>
        </div>
      </section>
    </StyledItem>
  );
}
