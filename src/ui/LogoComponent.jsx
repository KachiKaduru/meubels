import styled from "styled-components";
import logoImg from "../data/images/logo.svg";
const StyledLogo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  width: 100%;
  padding: 4.5rem 0 1.4rem;

  span {
    width: 100%;
    height: 1px;
    background: #bdbdbd;
  }
`;

export default function LogoComponent() {
  return (
    <StyledLogo>
      <span></span>
      <div>
        <img src={logoImg} alt="" />
      </div>
      <span></span>
    </StyledLogo>
  );
}
