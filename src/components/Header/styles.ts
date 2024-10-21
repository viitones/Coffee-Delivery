import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderMenu = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  img {
    width: 5rem;
  }
`

export const AsideMenu = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;


    &:first-of-type {
      background-color: ${prop => prop.theme['purple-light']};
      color: ${prop => prop.theme['purple']};

      font: ${mixins.fonts.textS};

      span {
        color: ${prop => prop.theme['purple-dark']};
      }
    }

    &:last-of-type {
      background-color: ${prop => prop.theme['yellow-light']};
      color: ${prop => prop.theme['yellow-dark']};

      path {
        fill: ${prop => prop.theme['yellow-dark']};
      }
    }
  }
`
