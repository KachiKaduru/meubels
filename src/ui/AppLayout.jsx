import { Outlet, useNavigation } from "react-router-dom";
import styled from "styled-components";
import LoadingPage from "./LoadingPage";

const StyledAppLayout = styled.main`
  padding: 0 2rem;
  height: 100dvh;
  position: relative;
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
