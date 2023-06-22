import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
        color: #fff; 
    }

    /* CSS Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;