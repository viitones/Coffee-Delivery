import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  position: relative;

  > div {
    margin-top: 2rem;
    width: 100%;
  }

  > img {
    position: absolute;
    width: 100%;
    max-height: 34rem;

    top: 0;
    left: 0;
    object-fit: cover;
  }
`

export const HeroContent = styled.section`
  width: 100%;
  max-width: 75rem;

  padding: 5.75rem 1.25rem;

  margin-inline: auto;

  /* margin: auto; */

  display: flex;
  align-items: start;
  justify-content: space-between;
  /* background-color: red; */

  img {
    max-width: 30rem;
  }
`
export const AsideHero = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  max-width: 38rem;

  h1 {
    ${mixins.fonts.titleXL};
    color: ${props => props.theme['black']};
  }

  p  {
    margin-top: 1rem;
    ${mixins.fonts.textL}
    color: ${props => props.theme['gray-900']};
  }
`

export const DeliverContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;

    ${mixins.fonts.textM};
    color: ${props => props.theme['gray-800']};
  }

  div:nth-child(1) {
    span:nth-child(1) {
    background-color: ${props => props.theme['yellow-dark']};
    }
  }

  div:nth-child(2) {
    span:nth-child(1) {
    background-color: ${props => props.theme['gray-900']};
    }
  }

  div:nth-child(3) {
    span:nth-child(1) {
    background-color: ${props => props.theme['yellow']};
    }
  }

  div:nth-child(4) {
    span:nth-child(1) {
    background-color: ${props => props.theme['purple']};
    }
  }

  span:first-of-type {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-right: 0.75rem;

    color: white;

    border-radius: 99999px;
  }
`

export const CardContent = styled.section`
  width: 100%;
  max-width: 75rem;

  margin-inline: auto;
  margin-top: 2rem;
  padding-inline: 1.25rem;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
  }
`
