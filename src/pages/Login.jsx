import styled from "styled-components";
import LogoComponent from "../ui/LogoComponent";
import AccountForm from "../features/authentication/AccountForm";
import AccountHeading from "../ui/AccountHeading";

const StyledLogin = styled.section`
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

export default function Login() {
  return (
    <StyledLogin>
      <LogoComponent />

      <AccountHeading>welcome back!</AccountHeading>

      <AccountForm type="login" />
    </StyledLogin>
  );
}
