import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";

import { HiHome } from "react-icons/hi2";
import homeImg from "../data/images/home.svg";

import { HiOutlineUser } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";

import { HiOutlineBell } from "react-icons/hi2";
import { HiBell } from "react-icons/hi2";

const StyledNav = styled.nav`
  /* @media (min-width: 767px) {
    grid-row: 1/-1;
    grid-column: 1/2;
  } */
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 3rem;
  box-shadow: 0 -0.3rem 1rem 1px #ddd;

  /* @media (min-width: 430px) {
    justify-content: space-around;
  } */

  /* @media (min-width: 767px) {
    flex-direction: column;
    gap: 2rem;
    height: 100dvh;
    align-items: unset;
    justify-content: space-around;
  } */
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;

  svg,
  img {
    width: 100%;
    height: 100%;
    stroke: var(--grey-color);
  }

  &:active svg,
  &.active:visited svg,
  &.active:visited p {
    fill: var(--primary-color);
    stroke: var(--primary-color);
    color: var(--primary-color);
  }

  span {
    display: block;
    position: absolute;
    top: -0.8rem;
    right: -0.8rem;
    border-radius: 50%;
    font-weight: 700;
    background: red;
    color: white;
    font-size: 1.2rem;
    width: 1.5rem;
    height: 1.5rem;
    display: grid;
    place-content: center;
    text-align: center;

    @media (min-width: 767px) {
      right: 2rem;
    }
  }

  .icon-name {
    font-size: 1.8rem;
    color: var(--grey-color);
    font-weight: 600;
    text-align: center;
    display: none;
  }

  @media (min-width: 767px) {
    /* width: 3.5rem; */
    /* width: 100%;
    height: 3.5rem;

    span {
      width: 2rem;
      height: 2rem;
      font-size: 1.4rem;
    }

    .icon-name {
      display: block;
    } */
  }
`;

export default function Navbar({ className }) {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.order.orders);
  const userId = user.user_id;

  return (
    <StyledNav className={className}>
      <StyledUl>
        <StyledNavLink to="/">
          {({ isActive }) => (
            <>
              {isActive ? <HiHome /> : <img src={homeImg} />}
              <p className="icon-name">Home</p>
            </>
          )}
        </StyledNavLink>

        <StyledNavLink to="/cart">
          {({ isActive }) => (
            <>
              {isActive ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
              {cart.length > 0 && <span>{cart.length}</span>}
              <p className="icon-name">Cart</p>
            </>
          )}
        </StyledNavLink>
        {userId && (
          <StyledNavLink to="/notifications">
            {({ isActive }) => (
              <>
                {isActive ? <HiBell /> : <HiOutlineBell />}
                {orders.length > 0 && <span>{orders.length}</span>}
                <p className="icon-name">Notifications</p>
              </>
            )}
          </StyledNavLink>
        )}
        <StyledNavLink to="/profile">
          {({ isActive }) => (
            <>
              {isActive ? <HiUser /> : <HiOutlineUser />}
              <p className="icon-name">Profile</p>
            </>
          )}
        </StyledNavLink>
      </StyledUl>
    </StyledNav>
  );
}
