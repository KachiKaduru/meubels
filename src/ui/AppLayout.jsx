import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  padding: 0 2rem;
  height: 100dvh;
  display: grid;
  grid-template-rows: 1fr auto;

  .outlet {
    overflow-y: auto;
    /* overflow-x: hidden; */
  }
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <div className="outlet">
        <Outlet />
      </div>

      <Navbar />
    </StyledAppLayout>
  );
}
