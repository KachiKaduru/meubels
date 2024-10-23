import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navlinksArray } from "../data/NavLinksArray";

import { HiOutlineBookmark, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import { useSelector } from "react-redux";

const StyledUl = styled.ul`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 3rem;
  box-shadow: 0 -0.3rem 1rem 1px #ddd;

  /* @media (min-width: 767px) { */
  /* flex-direction: column; */
  /* grid-column: 1/2; */
  /* } */
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  border: 1px solid green;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--grey-color);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: white;
    background-color: var(--black-color);
  }

  span {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
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
  console.log(cart.length);

  return (
    <nav>
      <StyledUl>
        <StyledNavLink to="/">
          <HiOutlineHome />
        </StyledNavLink>
        <StyledNavLink to="/cart">
          {cart.length > 0 ? <span>{cart.length}</span> : null}
          <HiOutlineShoppingCart />
        </StyledNavLink>
        <StyledNavLink to="/notifications">
          <HiOutlineBell />
        </StyledNavLink>
        <StyledNavLink to="/profile">
          <HiOutlineUser />
        </StyledNavLink>
      </StyledUl>
    </nav>
  );
}
// export default function Navbar() {
//   return (
//     <nav>
//       <StyledUl>
//         {navlinksArray.map((link) => (
//           <StyledNavLink to={link.route} key={link.id}>
//             <img src={link.img} alt="" />
//             {/* <{link.svg}></> */}
//           </StyledNavLink>
//         ))}
//       </StyledUl>
//     </nav>
//   );
// }
