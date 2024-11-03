import styled from "styled-components";
import Button from "./Button";
import { logout } from "../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

const StyledModal = styled.section`
  position: absolute;
  top: 0;
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100dvh;
  display: grid;
  place-content: center;

  .green {
    background-color: green;
    border: 1px solid green;
  }

  .red {
    background-color: #d00202;
    border: 1px solid #d00202;
  }

  .logout-modal {
    background-color: white;
    display: grid;
    gap: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0.1rem #ddd;

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
        <h4>Are you sure you want to logout?</h4>

        <span>
          <Button onClick={handleLogout} className={"red"}>
            Yes, logout
          </Button>
          <Button onClick={handleOpen} className={"green"}>
            cancel
          </Button>
        </span>
      </div>
    </StyledModal>
  );
}
