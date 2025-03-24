import { Outlet, useNavigation } from "react-router-dom";
import styled from "styled-components";
import LoadingPage from "./LoadingPage";

const StyledAppLayout = styled.main`
  padding: 0 2rem;
  height: 100dvh;
  position: relative;
  max-width: 480px;
  margin: auto;
  box-shadow: 0 0 4px 2px #ccc;
`;

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <StyledAppLayout>
      {isLoading && <LoadingPage />}
      {/* <LoadingPage /> */}
      <Outlet />
    </StyledAppLayout>
  );
}
