import styled from "styled-components";
import Button from "../../ui/Button";
import { Form, Link } from "react-router-dom";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  max-width: 70rem;
  margin: auto;

  p {
    text-align: center;
    a {
      text-transform: uppercase;
    }
  }

  label {
    padding: 0.5rem 0;

    legend {
      color: #909090;
      font-size: 1.4rem;
      font-weight: 400;
    }

    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #e0e0e0;
      font-size: 1.6rem;
      padding: 1rem;
      font-family: "Nunito sans", serif;
    }

    input[type="text"] {
      text-transform: capitalize;
    }
  }

  .sign-up {
    a {
      font-weight: 700;
      color: var(--black-color);
      text-decoration: none;
    }
  }

  .error {
    color: red;
    padding: 0.4rem;
    font-size: 1.4rem;
    text-align: left;
  }
`;
export default function AccountForm({ type = "signup", formError, loginError }) {
  return (
    <StyledForm method="POST">
      {type === "signup" && (
        <label htmlFor="">
          <legend>Name</legend>
          <input type="text" name="username" required />
        </label>
      )}

      <label htmlFor="">
        <legend>Email</legend>
        <input type="email" name="email" required />
      </label>

      <label htmlFor="">
        <legend>Password</legend>
        <input type="password" name="password" required />
        {loginError ? <p className="error">{loginError.message}</p> : null}
      </label>

      {type === "signup" && (
        <label htmlFor="">
          <legend>Confirm Password</legend>
          <input type="password" name="confirmPassword" required />
          {formError?.passwordError && <p className="error">{formError.passwordError}</p>}
        </label>
      )}

      {type === "login" && (
        <>
          <p>Forgot Password?</p>
          <Button>log in</Button>
          <p className="sign-up">
            <Link to="/signup">Sign up</Link>
          </p>
        </>
      )}

      {type === "signup" && (
        <>
          <Button uppercase>Sign up</Button>
          <p className="sign-up">
            Already have an account? <Link to={"/login"}>Sign in</Link>
          </p>
        </>
      )}
    </StyledForm>
  );
  // return (
  //   <StyledForm>
  //     {type === "signup" && (
  //       <label htmlFor="">
  //         <legend>Name</legend>
  //         <input
  //           type="text"
  //           name="username"
  //           required
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //         />
  //       </label>
  //     )}

  //     <label htmlFor="">
  //       <legend>Email</legend>
  //       <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
  //     </label>

  //     <label htmlFor="">
  //       <legend>Password</legend>
  //       <input
  //         type="password"
  //         required
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </label>

  //     {type === "signup" && (
  //       <label htmlFor="">
  //         <legend>Confirm Password</legend>
  //         <input
  //           type="password"
  //           required
  //           value={conFirmPassword}
  //           onChange={(e) => setConfirmPassword(e.target.value)}
  //         />
  //       </label>
  //     )}

  //     {type === "login" && (
  //       <>
  //         <p>Forgot Password?</p>
  //         <Button>log in</Button>
  //         <p>
  //           <Link to="/signup">Sign up</Link>
  //         </p>
  //       </>
  //     )}

  //     {type === "signup" && (
  //       <>
  //         <Button uppercase>Sign up</Button>
  //         <p className="sign-up">
  //           Already have an account? <Link to={"/login"}>Sign in</Link>
  //         </p>
  //       </>
  //     )}
  //   </StyledForm>
  // );
}
