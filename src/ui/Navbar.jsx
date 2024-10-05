import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navlinksArray } from "../data/NavLinksArray";

const StyledUl = styled.ul`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 3rem;
  box-shadow: 0 -0.3rem 1rem 1px #ddd;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover img,
  &:active img,
  &.active:link img,
  &.active:visited img {
    background: #ddd;
    filter: invert(0);
  }
`;

export default function Navbar() {
  return (
    <nav>
      <StyledUl>
        {navlinksArray.map((link) => (
          <StyledNavLink to={link.route} key={link.id}>
            <img src={link.img} alt="" />
          </StyledNavLink>
        ))}
      </StyledUl>
    </nav>
  );
}
