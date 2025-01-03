import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const defaultStyles = css`
  background: var(--primary-color);
  color: white;
  box-shadow: 0px 10px 20px 0px #30303040;
  font-family: "Nunito sans", sans-serif;
  font-weight: 500;
  text-align: center;
  border-radius: 0.8rem;
  text-transform: capitalize;
  cursor: pointer;
`;

const lengths = {
  full: css`
    width: 100%;
  `,
  half: css`
    width: 70%;
  `,
  contain: css`
    width: fit-content;
  `,
};

const paddings = {
  large: css`
    padding: 1.7rem 0;
  `,
  medium: css`
    padding: 1.3rem 0;
  `,
  small: css`
    padding: 0.7rem 0;
  `,
};

const invert = css`
  background: #fff;
  color: var(--primary-color);
  border: 1px solid var(--black-color);
`;

const uppercase = css`
  text-transform: uppercase;
`;

const disabled = css`
  background-color: var(--disabled-color);
  cursor: not-allowed;
  border: none;
  /* color: white; */
`;
const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.4rem;

  ${defaultStyles}
  ${(props) => lengths[props.cover]}
  ${(props) => paddings[props.padding]} 
  ${(props) => props.uppercase && uppercase}
  ${(props) => props.invert && invert}
`;

const StyledButton = styled.button`
  ${defaultStyles}

  ${(props) => lengths[props.cover]}
  ${(props) => paddings[props.padding]} 
  ${(props) => props.uppercase && uppercase}
  ${(props) => props.invert && invert}  
  ${(props) => props.disabled && disabled}
`;

export default function Button({
  children,
  cover = "full",
  padding = "medium",
  uppercase,
  invert,
  type = "normal",
  route,
  onClick,
  disabled,
  className,
}) {
  //
  if (type === "link")
    return (
      <StyledLink
        className={className}
        cover={cover}
        padding={padding}
        uppercase={uppercase}
        invert={invert}
        type={type}
        to={`${route}`}
      >
        {children}
      </StyledLink>
    );

  return (
    <StyledButton
      className={className}
      disabled={disabled}
      cover={cover}
      padding={padding}
      uppercase={uppercase}
      invert={invert}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
