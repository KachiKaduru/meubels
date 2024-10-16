import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Display from "../../ui/Display";
import OrderItem from "./OrderItem";

const StyledOrder = styled.section`
  .container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
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

export default function Orders() {
  return (
    <StyledOrder>
      <BarHeader>
        <BackButton />
        <h4>my order</h4>
      </BarHeader>

      <div className="container">
        <StyledNavlink>Delivered</StyledNavlink>
        <StyledNavlink>Processing</StyledNavlink>
        <StyledNavlink>Cancelled</StyledNavlink>
      </div>

      <Display>
        <OrderItem />
        <OrderItem />
      </Display>
    </StyledOrder>
  );
}
