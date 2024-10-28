import {
  ButtonsContainer,
  CardContainer,
  CardTagContainer,
  PriceSection,
} from './styles'

import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

export interface CardProps {
  coffee: {
    id: string;
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt="" />
      <CardTagContainer>
        {coffee.tags.map(tag => <span key={tag}>{tag}</span>)}
      </CardTagContainer>
      <div>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </div>
      <PriceSection>
        <div>R$<span>9,90</span></div>
        <ButtonsContainer>
          <div>
            <button><Minus /></button>
            <span>1</span>
            <button><Plus /></button>
          </div>
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </ButtonsContainer>
      </PriceSection>
    </CardContainer>
  )
}
