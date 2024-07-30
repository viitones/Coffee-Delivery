import styled from 'styled-components'

export const CardContainer = styled.section`
  background-color: ${(prop) => prop.theme['gray-300']};
  max-width: 16rem;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`

export const ImgContainer = styled.figure`
  width: 7.5rem;
  margin-inline: auto;

  img {
    width: 100%;
    margin-top: -1.125rem;
  }
`

export const TypeCoffee = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-block: 0.75rem 1rem;

  span {
    background-color: ${(prop) => prop.theme['light-yellow']};
    color: ${(prop) => prop.theme['dark-yellow']};

    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-weight: bold;
  }
`

export const NameOfCoffee = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`
export const DescriptionOfCoffee = styled.p`
  font: 500 var(--font-roboto-md) / 1.3 var(--font-roboto);
  color: ${(prop) => prop.theme['gray-600']};
  text-align: center;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
  padding-inline: 1.5rem;
  padding-bottom: 1.25rem;
`

export const Price = styled.div`
  font: 700 var(--font-roboto-lg) / 1.3 var(--font-roboto);
  color: ${(prop) => prop.theme['gray-800']};

  span:nth-child(1) {
    font: 500 0.875rem / 1.3 'roboto';
  }

  span:nth-child(2) {
    margin-left: 0.25rem;
    font: 700 1.25rem / 1.3 'Baloo 2';
  }
`

export const ButtonsPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Buttons = styled.div`
  background-color: ${(prop) => prop.theme['gray-400']};
  display: flex;
  gap: 0.25rem;

  padding: 0.53rem 0.5rem;
  border-radius: 6px;

  svg {
    color: ${(prop) => prop.theme['medium-purple']};
    cursor: pointer;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: ${(prop) => prop.theme['dark-purple']};
    }
  }
`

const ButtonsDefault = styled.button`
  background-color: transparent;
  border: none;
`

export const AddToCartButton = styled(ButtonsDefault)``

export const RemoveToCartButton = styled(ButtonsDefault)``

export const CartButton = styled(ButtonsDefault)`
  padding: 0.5rem;
  background-color: ${(prop) => prop.theme['dark-purple']};
  border-radius: 6px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${(prop) => prop.theme['medium-purple']};
  }
`
