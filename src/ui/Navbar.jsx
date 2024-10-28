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

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 3rem;
  box-shadow: 0 -0.3rem 1rem 1px #ddd;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    stroke: var(--grey-color);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    fill: var(--primary-color);
    stroke: var(--primary-color);
  }

  aside {
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
    text-align: center;
  }
`;

export default function Navbar() {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user);
  const userId = user.user_id;

  return (
    <nav>
      <StyledUl>
        <StyledNavLink to="/">
          {({ isActive }) => (isActive ? <HiHome /> : <img src={homeImg} />)}
        </StyledNavLink>

        <StyledNavLink to="/cart">
          {({ isActive }) => (
            <>
              {isActive ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
              {cart.length > 0 && <aside>{cart.length}</aside>}
            </>
          )}
        </StyledNavLink>
        {userId && (
          <StyledNavLink to="/notifications">
            {({ isActive }) => (isActive ? <HiBell /> : <HiOutlineBell />)}
          </StyledNavLink>
        )}
        <StyledNavLink to="/profile">
          {({ isActive }) => (isActive ? <HiUser /> : <HiOutlineUser />)}
        </StyledNavLink>
      </StyledUl>
    </nav>
  );
}
