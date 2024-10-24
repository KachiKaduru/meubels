import styled from "styled-components";
import LogoComponent from "../ui/LogoComponent";
import AccountForm from "../features/authentication/AccountForm";
import AccountHeading from "../ui/AccountHeading";
import { redirect, useActionData } from "react-router-dom";
import { signUp } from "../services/apiAuthentication";

const StyledSignup = styled.section`
  height: 100dvh;
  padding: 2rem;
  overflow: auto;
`;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { username, email, password, confirmPassword } = data;

  const errors = {};
  if (password !== confirmPassword) {
    errors.passwordError = `Password doesn't match`;
  }

  if (Object.keys(errors).length > 0) return errors;

  signUp(username, email, password);
  return redirect("/");
}

export default function SignUp() {
  const formError = useActionData();

  return (
    <StyledSignup>
      <LogoComponent />

      <AccountHeading>welcome</AccountHeading>

      <AccountForm formError={formError} />
    </StyledSignup>
  );
}
