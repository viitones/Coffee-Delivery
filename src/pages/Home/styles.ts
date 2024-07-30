import styled from 'styled-components'

export const DivContainer = styled.div`
  > header {
    padding-top: 5.875rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    aside {
      width: calc(100% - 29.75rem - 3.5rem);

      > p {
        margin: 1rem 0 4.125rem;
        font: 500 var(--font-roboto-lg) / 1.3 var(--font-roboto);
        color: ${(prop) => prop.theme['gray-800']};
      }
    }
  }
`
export const DivNavigate = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  color: ${(prop) => prop.theme['gray-700']};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.25rem;

    span {
      padding: 0.5rem;
      border-radius: 50%;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      margin-right: 0.75rem;
    }
  }

  div:first-of-type {
    p:first-of-type {
      span {
        background-color: ${(prop) => prop.theme['dark-yellow']};
      }
    }
    p:last-of-type {
      span {
        background-color: ${(prop) => prop.theme['medium-yellow']};
      }
    }
  }
  div:last-of-type {
    p:first-of-type {
      span {
        background-color: ${(prop) => prop.theme['gray-700']};
      }
    }
    p:last-of-type {
      span {
        background-color: ${(prop) => prop.theme['dark-purple']};
      }
    }
  }
`
export const MainContainer = styled.main`
  margin-top: 8.75rem;

  > div {
    margin-top: 3.375rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 2rem;
    flex-wrap: wrap;

    padding-bottom: 9.8rem;
  }
`
