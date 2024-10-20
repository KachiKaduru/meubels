import styled from "styled-components";

const StyledLayout = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;
  /* overflow-y: scroll; */

  /* @media (min-width: 767px) { */
  /* background: red; */
  /* grid-template-columns: 20rem 1fr; */
  /* grid-template-rows: auto 1fr; */
  /* gap: 2rem; */
  /* } */
`;

export default function Layout({ children, className }) {
  return <StyledLayout className={className}>{children}</StyledLayout>;
}
