import styled from "styled-components";
import LogoComponent from "../ui/LogoComponent";
import AccountForm from "../features/authentication/AccountForm";
import AccountHeading from "../ui/AccountHeading";

const StyledSignup = styled.section`
  height: 100dvh;
  padding: 2rem;
  overflow: auto;
`;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
}

export default function SignUp() {
  return (
    <StyledSignup>
      <LogoComponent />

      <AccountHeading>welcome</AccountHeading>

      <AccountForm />
    </StyledSignup>
  );
}
