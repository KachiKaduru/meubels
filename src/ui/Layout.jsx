import styled from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;
  /* overflow-y: scroll; */
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}
