import styled from "styled-components";

const StyledUserDisplay = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  .imgContainer {
    width: 8rem;
    height: 8rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .details {
    p {
      color: red;
    }
  }
`;

export default function UserDisplay() {
  return (
    <div>
      <div className="imgContainer">
        <img src="" alt="img" />
      </div>

      <div className="details">
        <h2>Kachi Kaduru</h2>
        <p>kach@gmail.com</p>
      </div>
    </div>
  );
}
