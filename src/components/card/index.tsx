import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

import { useTheme } from 'styled-components'

import {
  AddToCartButton,
  Buttons,
  ButtonsPriceContainer,
  CardContainer,
  CartButton,
  DescriptionOfCoffee,
  ImgContainer,
  NameOfCoffee,
  Price,
  PriceContainer,
  RemoveToCartButton,
  TypeCoffee,
} from './styles'

interface CoffeeProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CoffeeProps) {
  const theme = useTheme()

  return (
    <CardContainer>
      <ImgContainer>
        <img src={coffee.image} alt="café" />
      </ImgContainer>
      <TypeCoffee>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TypeCoffee>
      <NameOfCoffee>{coffee.title}</NameOfCoffee>
      <DescriptionOfCoffee>{coffee.description}</DescriptionOfCoffee>
      <PriceContainer>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <ButtonsPriceContainer>
          <Buttons>
            <AddToCartButton>
              <Minus />
            </AddToCartButton>
            <span>1</span>
            <RemoveToCartButton>
              <Plus />
            </RemoveToCartButton>
          </Buttons>
          <CartButton>
            <ShoppingCart color={theme.white} size={22} weight="fill" />
          </CartButton>
        </ButtonsPriceContainer>
      </PriceContainer>
    </CardContainer>
  )
}
