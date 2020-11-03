import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


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
    
    background-color: #f3f3f2;
}

body {
    font-family: 'Lato', sans-serif;
}
`;

export default GlobalStyle;
