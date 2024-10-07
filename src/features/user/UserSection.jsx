import { NavLink } from "react-router-dom";
import styled from "styled-components";
import greaterThan from "../../data/images/g-than.svg";

const StyledSection = styled(NavLink)`
  text-decoration: none;
  color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--disabled-color);

  h4 {
    font-weight: 700;
    font-size: 1.8rem;
  }

  p {
    color: var(--text-color);
    font-size: 1.4rem;
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
