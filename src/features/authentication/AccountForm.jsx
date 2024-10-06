import styled from "styled-components";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* border: 1px solid rebeccapurple; */
  padding: 2rem 0;

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
    }

    input[type="text"] {
      text-transform: capitalize;
    }
  }
`;
export default function AccountForm({ type = "signup" }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conFirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {type === "signup" && (
        <label htmlFor="">
          <legend>Name</legend>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      )}

      <label htmlFor="">
        <legend>Email</legend>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label htmlFor="">
        <legend>Password</legend>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {type === "signup" && (
        <label htmlFor="">
          <legend>Confirm Password</legend>
          <input
            type="password"
            required
            value={conFirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      )}

      {type === "login" && (
        <>
          <p>Forgot Password?</p>
          <Button>log in</Button>
          <p>
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
}
