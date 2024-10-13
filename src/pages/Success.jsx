import styled from "styled-components";
import img0 from "../data/images/success-0.png";
import img1 from "../data/images/success-1.svg";
import Button from "../ui/Button";

const StyledSection = styled.section`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ImgContainer = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  width: fit-content;

  .img-01 {
    position: absolute;
    top: 2rem;
    right: 3.5rem;
  }
`;

export default function Success() {
  return (
    <StyledSection>
      <h1>SUCCESS!</h1>

      <ImgContainer>
        <img src={img0} alt="" />
        <img src={img1} alt="" className="img-01" />
        <span></span>
      </ImgContainer>

      <div>
        <p>Your order will be delivered soon.</p>
        <p>Thank you for choosing our app!</p>
      </div>

      <Button>Track your orders</Button>
      <Button uppercase invert type="link" route={"/"}>
        Back to home
      </Button>
    </StyledSection>
  );
}
