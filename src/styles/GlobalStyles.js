import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --primary-color: #242424;
  --text-color: #606060;
  --black-color: #303030;
  --grey-color: #909090;
  --disabled-color: #999999;

  --tablet: 767px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "Nunito Sans", sans-serif;
  min-width: 32rem;
  margin: auto;
}

.container{
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  /* @media (min-width: 767px) {
    grid-row: 1/-1;
    grid-column: 1/2;

    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10rem 0;
  } */
}

`;

export default GlobalStyles;
