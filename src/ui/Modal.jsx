import styled from "styled-components";
import Button from "./Button";
import { logout } from "../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

const StyledModal = styled.section`
  position: absolute;
  top: 0;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100dvh;
  border: 1px solid green;

  display: grid;
  place-content: center;

  .logout-modal {
    border: 1px solid red;
    background-color: white;

    span {
      display: flex;
      justify-content: space-around;
      gap: 2rem;
    }
  }
`;

export default function Modal({ handleOpen }) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <StyledModal>
      <div className="logout-modal">
        <h4>Are you sure you want to logout ?</h4>

        <span>
          <Button onClick={handleLogout}>Yes, logout</Button>
          <Button onClick={handleOpen}>cancel</Button>
        </span>
      </div>
    </StyledModal>
  );
}
