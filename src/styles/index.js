import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --brand-1: #ffedc8;
        --brand-2: #F2A000;
        --brand-3: #E78B1F;
        --brand-4: #F26C0A;

        --black-1: #434343;
        --black-2: #272727;
        --black-3: #141414;
        --black-4: #000000;

        --white-1: #FFFFFF;
        --white-2: #E6E6E6;
        --white-3: #C4C4C4;
        --white-4: #A8A8A8;
    }

    html, body {
        font-size: 62.5%;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: var(--black-3);
    }

    .container {
        width: 100%;
        max-width: 120rem;
        margin: 0 auto;
        padding: 0 1.6rem;
    }

    .panels {
        display: flex;
        /* align-items: stretch; */
        gap: 2rem;
        background: var(--black-1);
    }

    hr {
        border: 0;
        border-top: 1px solid var(--brand-2);
        margin-bottom: 2.4rem;
    }
`;
