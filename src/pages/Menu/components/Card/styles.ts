import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 16rem;
  padding: 1.25rem 1.5rem;
  margin-top: 3.375rem;
  border-radius: 6px 36px;

  background-color: ${prop => prop.theme['gray-300']};

  display: flex;
  flex-direction: column;
  align-items: center;


  > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -3rem;
  }

  h3 {
    text-align: center;
    ${mixins.fonts.titleS}
    color: ${prop => prop.theme['gray-900']};
  }

  p {
    margin-block: 0.5rem 1rem;
    text-align: center;
    ${mixins.fonts.textS}
    color: ${prop => prop.theme['gray-700']}
  }

`

export const CardTagContainer = styled.div`
  font-weight: bold;
  font-size: 0.7rem;

  margin-block: 0.75rem 1rem;

  span {
    background-color: ${prop => prop.theme['yellow-light']};
    color: ${prop => prop.theme['yellow-dark']};

    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    text-transform: uppercase;
  }

`

export const PriceSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

    > div {
      ${mixins.fonts.textS};
      color: ${prop => prop.theme['gray-900']};

      span {
        ${mixins.fonts.titleM};
        color: ${prop => prop.theme['gray-800']};
        margin-left: 0.25rem;
      }
    }

`

export const ButtonsContainer = styled.span`
  > div {
    width: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    ${mixins.fonts.textM}

    background-color: ${prop => prop.theme['gray-500']};
    padding: 0.5rem;

    button {
      display: inherit;
      color: ${prop => prop.theme['purple']};
      cursor: pointer;

      &:hover {
        color: ${prop => prop.theme['purple-dark']};
        transition: color 100ms ease-in-out;
      }
    }
    
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    all: unset
  }

  > button {
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${prop => prop.theme['purple']};
    color: ${prop => prop.theme['white']};

    font: ${mixins.fonts.textS};

    cursor: pointer;


    &:hover {
      background-color: ${prop => prop.theme['purple-dark']};
      transition: background-color 100ms ease-in-out;
    }
  }
`
