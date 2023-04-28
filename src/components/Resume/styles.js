import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  header {
    height: 5.8rem;
    padding-left: 2rem;
    padding-right: 2rem;

    background: var(--brand-3);
    border: 2px solid var(--brand-2);
    border-radius: 0.5rem 0.5rem 0 0;

    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--white-1);
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.7rem;
  }

  .resume-content {
    padding: 2.2rem 2rem;

    display: flex;

    background: var(--black-2);
    border-right: 2px solid var(--brand-2);
    border-left: 2px solid var(--brand-2);

    li {
      list-style: none;

      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 3.2rem;

      color: var(--brand-2);

      display: flex;
      gap: 0.9rem;

      span {
        font-weight: 700;
        color: var(--brand-1);
      }
    }
  }

  footer {
    height: 5.4rem;
    padding: 2rem;

    background: var(--black-3);
    border: 2px solid var(--brand-2);
    border-radius: 0 0 0.4rem 0.4rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.7rem;

      color: var(--brand-2);

      display: flex;
      align-items: center;
      gap: 0.8rem;

      span {
        font-weight: 700;
        color: var(--brand-1);
      }
    }
  }
`;
