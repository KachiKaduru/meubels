import styled from "styled-components";
import BarHeader from "../ui/BarHeader";
import BackButton from "../ui/BackButton";
import { useRouteError } from "react-router-dom";

const StyledError = styled.div`
  height: 100%;
  /* padding: 0 2rem 2rem; */
  text-align: center;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.log("1", error);

  return (
    <StyledError>
      <BarHeader>
        <BackButton />
      </BarHeader>

      <h4>Something went wrong</h4>

      <p>{error.data}</p>
      <p>{error.message}</p>
    </StyledError>
  );
}
