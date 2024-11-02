import { Link } from "react-router-dom";
import styled from "styled-components";
import greaterThan from "../../data/images/g-than.svg";

const StyledSection = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  padding: 0 1rem;

  div {
    box-shadow: 0 4px 1rem 1px #c4c4c4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
  }

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
        <section>
          <h4>{title}</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </section>
        <img src={greaterThan} alt="" />
      </div>
    </StyledSection>
  );
}
