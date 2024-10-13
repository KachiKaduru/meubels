import styled from "styled-components";

import { square } from "ldrs";

square.register();

// Default values shown

const StyledLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  background: #dddddd27;
  height: 100dvh;
  width: 100%;
  z-index: 9999;
  backdrop-filter: blur(0.4rem);
`;

export default function LoadingPage() {
  return (
    <StyledLoading>
      <l-square
        size="35"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="1.2"
        color="black"
      ></l-square>
    </StyledLoading>
  );
}
