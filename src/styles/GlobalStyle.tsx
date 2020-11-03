import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300i,400&display=swap');

* {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%; 
    position: relative;
    
  background: grey;
}

body {
    font-family: 'Open Sans', sans-serif;
}
`;

export default GlobalStyle;
