import styled from "styled-components";
import LogoComponent from "../ui/LogoComponent";
import AccountForm from "../features/authentication/AccountForm";
import AccountHeading from "../ui/AccountHeading";
import { login } from "../services/apiAuthentication";
import { redirect, useActionData, useRouteError } from "react-router-dom";

const StyledLogin = styled.section`
  height: 100dvh;
  padding: 2rem;
  overflow: auto;
`;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { email, password } = data;

  const user = await login(email, password);

  if (user) {
    return redirect("/");
  } else {
    return null;
  }
}

export default function LoginError() {
  const formError = useActionData();
  const loginError = useRouteError();

  return (
    <StyledLogin>
      <LogoComponent />

      <AccountHeading>welcome back!</AccountHeading>

      <AccountForm type="login" formError={formError} loginError={loginError} />
    </StyledLogin>
  );
}
