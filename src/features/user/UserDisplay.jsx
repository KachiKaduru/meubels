import styled from "styled-components";
import img from "../../data/images/product-2.png";
import { useState } from "react";

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

export default function UserDisplay({ username, userEmail }) {
  const [name] = useState(username || "");
  const [email] = useState(userEmail || "");

  return (
    <StyledUserDisplay>
      <div className="imgContainer">
        <img src={img} alt="img" />
      </div>

      <div className="details">
        <h2> hello{`${name ? ` ${name}` : " there,"}`}</h2>
        {/* <h2>Kachi Kaduru</h2> */}
        <p>{email}</p>
      </div>
    </StyledUserDisplay>
  );
}
