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
  /* width: 37.5rem; */
  margin: auto;
  border: 1px solid red;
}

nav{
  /* background-color: green; */

  /* @media (min-width: 767px) { */
    /* grid-row: 1/-1; */
    /* grid-column: 1/2; */
  /* } */
}

`;

export default GlobalStyles;
