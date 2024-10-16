import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import greaterThan from "../../data/images/g-than.svg";

const StyledSection = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--disabled-color);
  /* box-shadow: 0 0 1rem 0.1rem red; */

  h4 {
    font-size: 1.8rem;
    text-transform: capitalize;
  }

  p {
    color: #808080;
    font-size: 1.2rem;
  }
`;

export default function UserSection({ title, route }) {
  return (
    <StyledSection to={route}>
      <div>
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <img src={greaterThan} alt="" />
    </StyledSection>
  );
}
