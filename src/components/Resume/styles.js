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
    gap: 2rem;

    background: var(--black-2);
    border-right: 2px solid var(--brand-2);
    border-left: 2px solid var(--brand-2);

    li {
      list-style: none;

      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 3rem;

      color: var(--brand-2);

      display: flex;
      gap: 0.9rem;

      span {
        font-weight: 700;
        color: var(--brand-1);
      }
    }

    table {
      flex: 1;
      background: var(--brand-1);
      border-spacing: 0;
      border: 0.15rem solid var(--brand-2);
    }

    thead {
      height: 4.4rem;
      background: var(--black-4);

      th {
        padding: 0 1.6rem;
        color: var(--brand-1);

        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
        border-bottom: 0.15rem solid var(--brand-2);

        text-align: left;
      }
    }

    td {
      height: 3.6rem;
      padding: 0 1.6rem;

      font-style: normal;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 2.1rem;

      border-bottom: 0.5px dashed var(--brand-4);
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

export const EmptyContainer = styled.div`
  flex: 1;

  padding: 2rem 1.6rem;
  background: var(--black-2);

  border: 2px dashed var(--brand-2);
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h2 {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 2.8rem;
    color: var(--brand-1);
  }

  p {
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--brand-2);
  }
`;
