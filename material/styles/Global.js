import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}

html{
    font-family: 'Nunito', sans-serif;
}

body{
    background-color: teal;
}

a{
    color: magenta;
}

`;
