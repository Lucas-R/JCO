import { createGlobalStyle } from "styled-components"
 
export const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        color: black;
    }

    a, button{
        border: 0;
        outline: 0;
        background: none;
        text-decoration: none;
        cursor: pointer;
    }
`