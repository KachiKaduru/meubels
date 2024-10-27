import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiHome } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";

import userImg from "../data/images/user.svg";

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

  img {
    /* background-color: red; */

    &:hover {
      filter: invert(1);
      mix-blend-mode: color-dodge;
    }
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    stroke: var(--text-color);
    /* fill: none; */
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    fill: var(--primary-color);
    stroke: var(--grey-color);
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
          {/* <HiHome /> */}

          <HiOutlineHome />
        </StyledNavLink>
        <StyledNavLink to="/cart">
          {cart.length > 0 ? <span>{cart.length}</span> : null}
          <HiOutlineShoppingCart />
        </StyledNavLink>
        {userId && (
          <StyledNavLink to="/notifications">
            <HiOutlineBell />
          </StyledNavLink>
        )}
        <StyledNavLink to="/profile">
          <HiOutlineUser />
          {/* <img src={userImg} alt="" /> */}
        </StyledNavLink>
      </StyledUl>
    </nav>
  );
}
