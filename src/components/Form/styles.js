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
    border: 2px solid var(--brand-2);
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .form-group {
    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: var(--brand-2);

      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    input[type="number"] {
      height: 4.5rem;
      padding: 0 1.2rem;

      background: var(--black-3);
      border: 1px solid var(--black-1);
      border-radius: 4px;

      color: var(--white-3);
      font-size: 1.6rem;
      font-weight: 700;
    }

    button {
      height: 4.5rem;

      border-radius: 4px;

      color: var(--white-1);

      font-style: normal;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.7rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    button:nth-of-type(1) {
      background: var(--brand-3);
      border: 2px solid var(--brand-4);
    }

    button:nth-of-type(2) {
      margin-top: 1rem;
      color: var(--black-1);
      background: var(--brand-1);
      border: 2px solid var(--brand-2);
    }
  }

  .form-group.form-group-checkbox {
    display: flex;
    flex-direction: row;

    label {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      input {
        width: 1.6rem;
        height: 1.6rem;

        display: grid;
        place-content: center;

        &::before {
          content: "";
          width: 0.65em;
          height: 0.65em;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em var(--form-control-color);
        }

        &:checked::before {
          transform: scale(1);
        }
      }
    }
  }
`;
