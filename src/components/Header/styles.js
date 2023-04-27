import styled from "styled-components";

export const Container = styled.header`
    background: var(--brand-3);
    margin-bottom: 2.4rem;

    .container {
        min-height: 12rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4.8rem;

        color: var(--brand-1);

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
        text-transform: uppercase;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;

        color: var(--brand-1);

        text-shadow: 0px 2px 2px rgba(85, 85, 85, 0.2);
    }
`;