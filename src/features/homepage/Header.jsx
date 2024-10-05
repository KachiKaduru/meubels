import styled from "styled-components";
import SearchComponent from "../../ui/SearchComponent";
import CartComponent from "../../ui/CartComponent";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  text-align: center;

  p {
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Gelassio";
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <SearchComponent />
      <div>
        <span>make home</span>
        <p>beautiful</p>
      </div>
      <CartComponent />
    </StyledHeader>
  );
}
