import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LoadingPage from "./LoadingPage";

const StyledAppLayout = styled.main`
  padding: 0 2rem;
  height: 100dvh;
  position: relative;
  /* display: grid; */
  /* grid-template-rows: 1fr auto; */
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      {/* <LoadingPage /> */}
      <Outlet />
    </StyledAppLayout>
  );
}
