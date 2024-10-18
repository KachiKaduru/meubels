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

  const { email, password } = data;
  login(email, password);

  const errors = {};

  if (Object.keys(errors).length > 0) return errors;

  // console.log(data, error);
  return null;
  // return redirect("/");
}

export default function Login() {
  const formError = useActionData();
  // console.log(formError);

  return (
    <StyledLogin>
      <LogoComponent />

      <AccountHeading>welcome back!</AccountHeading>

      <p>{}</p>

      <AccountForm type="login" />
    </StyledLogin>
  );
}
