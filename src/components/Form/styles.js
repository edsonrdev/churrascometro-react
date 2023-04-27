import styled from "styled-components";

export const Container = styled.div`
    header {
        height: 58px;
        padding-left: 20px;
        padding-right: 20px;

        background: var(--brand-3);
        border: 2px solid var(--brand-2);
        border-radius: 5px 5px 0px 0px;

        display: flex;
        align-items: center;
        gap: 1rem;

        color: var(--white-1);
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.7rem;
    }

    form {
        padding: 2.2rem 2rem;
        background: var(--black-2);
    }

    .form-group {
        margin-bottom: 2rem;
        /* background: red; */

        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
            color: var(--brand-2);

            font-style: normal;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 2.4rem;
            background: blue;
        }

        input {
            height: 4.5rem;

            background: var(--black-3);
            border: 1px solid var(--black-1);
            border-radius: 4px;
        }
    }

    .form-group-checkbox {
        min-height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: red;
    }
`;