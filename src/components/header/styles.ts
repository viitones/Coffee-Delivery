import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  nav {
    div:nth-child(1) {
      margin-right: 0.75rem;

      padding: 0.5rem 0.625rem;

      color: ${(prop) => prop.theme['dark-purple']};
      background-color: ${(prop) => prop.theme['light-purple']};
      border-radius: 6px;

      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 2px;

      svg {
        fill: ${(prop) => prop.theme['dark-purple']};
      }
    }
  }
`

export const CartContainer = styled.a`
  padding: 0.5rem;
  background-color: ${(prop) => prop.theme['light-yellow']};
  border-radius: 6px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${(prop) => prop.theme['dark-yellow']};
    margin-right: 0.25rem;
  }
`
