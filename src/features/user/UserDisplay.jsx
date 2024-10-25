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
    h2 {
      font-size: 2rem;
      text-transform: capitalize;
    }

    p {
      color: var(--grey-color);
      font-size: 1.4rem;
    }
  }
`;

export default function UserDisplay({ username }) {
  // console.log(username);
  const [firstName] = username?.split(" ", 2);

  return (
    <StyledUserDisplay>
      <div className="imgContainer">
        <img src={img} alt="img" />
      </div>

      <div className="details">
        <h2> hello, {firstName}</h2>
        {/* <h2>Kachi Kaduru</h2> */}
        <p>kach@gmail.com</p>
      </div>
    </StyledUserDisplay>
  );
}
