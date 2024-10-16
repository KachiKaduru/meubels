import styled from "styled-components";
import Button from "../../ui/Button";

const StyledItem = styled.div`
  box-shadow: 0 0 1rem 0.1rem #000;
  border: 1px solid #ddd;

  header {
    padding: 1.5rem 1.5rem 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ddd;

    h4 {
      /* font-size: 1.6rem; */
      text-transform: capitalize;
      color: var(--primary-color);
    }

    p {
      color: var(--grey-color);
    }
  }

  .other {
    padding: 1.5rem 1.5rem 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 0;

    .status {
      color: #27ae60;
      place-self: end;
    }
  }
`;

export default function OrderItem() {
  return (
    <StyledItem>
      <header>
        <h4>order number</h4>
        <p>date</p>
      </header>

      <div className="other">
        <p>
          Quantity: <strong>02</strong>
        </p>
        <p>
          Total Amount: <strong>$150</strong>
        </p>
        <Button cover="half" padding="small" type="link">
          details
        </Button>

        <p className="status">delivered</p>
      </div>
    </StyledItem>
  );
}
