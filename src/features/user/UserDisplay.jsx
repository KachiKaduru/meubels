import styled from "styled-components";
import img from "../../data/images/product-2.png";

const StyledUserDisplay = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  /* border: 1px solid red; */
  padding: 1rem 0;
  /* box-shadow: 0 0 1rem var(--grey-color); */

  .imgContainer {
    width: 8rem;
    height: 8rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
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
    <StyledUserDisplay>
      <div className="imgContainer">
        <img src={img} alt="img" />
      </div>

      <div className="details">
        <h2>Kachi Kaduru</h2>
        <p>kach@gmail.com</p>
      </div>
    </StyledUserDisplay>
  );
}
