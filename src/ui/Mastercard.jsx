import styled from "styled-components";
import mastercardImg from "../data/images/mastercard.png";

const StyledMastercard = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem 2rem;
  box-shadow: 0 0 1rem 0.2rem var(--grey-color);

  .img-bg {
    background: white;
    padding: 0.7rem 1.6rem 0.4rem;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem var(--grey-color);

    img {
    }
  }
`;

export default function Mastercard() {
  return (
    <StyledMastercard>
      <div className="img-bg">
        <img src={mastercardImg} alt="" />
      </div>
      <p>**** **** **** 9207</p>
    </StyledMastercard>
  );
}
