import { useNavigate } from "react-router-dom";
import backBtn from "../data/images/backBtn.svg";
import styled from "styled-components";

const StyledBack = styled.div`
  cursor: pointer;
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
