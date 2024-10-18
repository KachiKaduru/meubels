import styled from "styled-components";

const StyledDisplay = styled.section`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`;

export default function Display({ children, className }) {
  return <StyledDisplay className={className}>{children}</StyledDisplay>;
}
