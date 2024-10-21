import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  width: 100%;
  max-width: 90rem;
  padding-inline: 10rem;
`
export const AsideHero = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  h1 {
    font: ${mixins.fonts.titleXL};
  }

  p  {
    font: ${mixins.fonts.textL}
  }

  div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
`
