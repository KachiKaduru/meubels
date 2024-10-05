import styled from "styled-components";

const StyledBar = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr 3rem;
  gap: 1rem;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: white;
  padding: 4.5rem 0 1.4rem;
`;

export default function BarHeader({ children }) {
  return <StyledBar>{children}</StyledBar>;
}
