import styled from "styled-components";
import dhl_img from "../data/images/dhl.png";

const StyledCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.7rem 2rem;
  box-shadow: 0 0 1rem 0.2rem var(--grey-color);
`;

export default function DhlCard() {
  return (
    <StyledCard>
      <img src={dhl_img} alt="" />
      <h4>Fast (2-3 days)</h4>
    </StyledCard>
  );
}
