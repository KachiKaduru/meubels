import styled from "styled-components";

const StyledLayout = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;

  @media (min-width: 767px) {
    grid-template-columns: 15rem 1fr;
    grid-template-rows: auto 1fr;
    gap: 2rem;
  }
`;

const StyledLayoutCart = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;

  @media (min-width: 767px) {
    grid-template-columns: 15rem 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 2rem;
  }
`;

export default function Layout({ children, className, type = "normal" }) {
  if (type === "cart")
    return (
      <StyledLayoutCart type={type} className={className}>
        {children}
      </StyledLayoutCart>
    );

  return (
    <StyledLayout className={className} type={type}>
      {children}
    </StyledLayout>
  );
}
