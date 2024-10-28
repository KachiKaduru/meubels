import styled from "styled-components";
import { formatDate } from "../utils/helpers";

const StyledNotification = styled.div`
  display: grid;
  grid-template-columns: 7rem 1fr;
  border: 1px solid red;

  .details {
    h4 {
      font-size: 1.2rem;
      color: var(--black-color);
      font-style: italic;

      span {
        font-style: normal;
      }
    }
    p {
      font-size: 1rem;
      color: var(--text-color);
    }
  }
`;

export default function NotificationItem({ orderId, orderDate }) {
  const date = formatDate(orderDate);
  return (
    <StyledNotification>
      <div className="imgContainer"></div>

      <div className="details">
        <h4>
          Your order
          <span> {orderId} </span>
          has been confirmed
        </h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu
          adipiscing nec. Turpis pretium et in arcu adipiscing nec.
        </p>

        <p>{date}</p>
      </div>
    </StyledNotification>
  );
}
