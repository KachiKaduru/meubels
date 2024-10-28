import styled from "styled-components";
import img0 from "../data/images/success-0.png";
import img1 from "../data/images/success-1.svg";
import Button from "../ui/Button";
import { getUserOrders } from "../services/apiOrders";
import { getUserId } from "../utils/helpers";
import { useLoaderData } from "react-router-dom";

const StyledSection = styled.section`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: 3.6rem;
    font-family: "Merriweather", sans-serif;
  }
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

export async function loader() {
  const userId = getUserId();
  const orders = await getUserOrders(userId);
  return { orders };
}

export default function Success() {
  const { orders } = useLoaderData();
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
