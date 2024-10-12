import styled, { css } from "styled-components";

const lengths = {
  full: css`
    width: 100%;
  `,
  half: css`
    width: 70%;
  `,
};

const paddings = {
  large: css`
    padding: 1.7rem 0;
  `,
  medium: css`
    padding: 1.3rem 0;
  `,
};

const uppercase = css`
  text-transform: uppercase;
`;

const StyledButton = styled.button`
  background: #242424;
  color: white;
  box-shadow: 0px 10px 20px 0px #30303040;
  font-family: "Poppins";
  text-align: center;
  border-radius: 1rem;
  text-transform: capitalize;
  cursor: pointer;

  ${(props) => lengths[props.cover]}
  ${(props) => paddings[props.padding]} 
  ${(props) => props.uppercase && uppercase}
`;

Button.defaultProps = {
  cover: "full",
  padding: "medium",
};

// export default Button;

export default function Button({
  children,
  cover = "full",
  padding = "medium",
  uppercase = false,
}) {
  return (
    <StyledButton cover={cover} padding={padding} uppercase={uppercase}>
      {children}
    </StyledButton>
  );
}
