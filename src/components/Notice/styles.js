import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 1.6rem;
    background: var(--black-2);
    margin-bottom: 2.4rem;

    border: 2px dashed var(--brand-2);
    border-radius: 0.5rem;

    h2 {
        margin-bottom: 2.4rem;

        color: var(--brand-2);

        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.7rem;

        display: flex;
        align-items: center;
        gap: 1rem;
    }

    ul {
        padding-left: 2rem;
    }

    li {
        color: var(--brand-2);

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 2.6rem;

        span {
            font-weight: 700;
        }
    }
`;