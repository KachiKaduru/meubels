import { useNavigate } from "react-router-dom";
import backBtn from "../data/images/backBtn.svg";
import styled from "styled-components";

const StyledBack = styled.div`
  cursor: pointer;
  img {
    width: 2rem;
  }

  @media (min-width: 767px) {
    img {
      width: 2.5rem;
    }
  }
`;

export default function BackButton({ className }) {
  const navigate = useNavigate();

  function handleReturn() {
    navigate(-1);
  }

  return (
    <StyledBack onClick={handleReturn} className={className}>
      <img src={backBtn} alt="" />
    </StyledBack>
  );
}
