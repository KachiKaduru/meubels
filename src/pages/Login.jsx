import styled from "styled-components";
import LogoComponent from "../ui/LogoComponent";
import AccountForm from "../features/authentication/AccountForm";
import AccountHeading from "../ui/AccountHeading";
import { login } from "../services/apiAuthentication";
import { redirect, useActionData } from "react-router-dom";

const StyledLogin = styled.section`
  height: 100dvh;
  padding: 2rem;
  overflow: auto;
`;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const { email, password } = data;
  login(email, password);

  return redirect("/");
}

export default function Login() {
  const formError = useActionData();

  return (
    <StyledLogin>
      <LogoComponent />

      <AccountHeading>welcome back!</AccountHeading>

      <AccountForm type="login" />
    </StyledLogin>
  );
}
