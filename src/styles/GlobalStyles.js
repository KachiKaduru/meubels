import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

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
  font-family: "Poppins", sans-serif;
  width: 37.5rem;
  margin: auto;
  border: 1px solid red;
}


.active{
    
}

`;

export default GlobalStyles;
