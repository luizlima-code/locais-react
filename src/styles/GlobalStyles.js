import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary: #1A374C;
        --secondary: #4AADE9;

        --background: #F1F1F1;
        --rows: #FEFEFE;
        --white: #ffffff;
    }
`;
