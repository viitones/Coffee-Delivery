import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { AsideHero, DeliverContainer, Hero, HeroContent } from './styles'

import coffeeCoup from '../../assets/coffee-coup.svg'
import heroBg from '../../assets/hero-bg.svg'

export function Menu() {
  return (
    <Hero>
      <HeroContent>
        <AsideHero>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café
              onde estiver, a qualquer hora
            </p>
          </div>

          <DeliverContainer>
            <div>
              <span><ShoppingCart weight="fill" /></span>
              <span>Compra simples e segura</span>
            </div>

            <div>
              <span><Package weight="fill" /></span>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <span><Timer weight="fill" /></span>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <span><Coffee weight="fill" /></span>
              <span>O café chega fresquinho até você</span>
            </div>
          </DeliverContainer>
        </AsideHero>
        <img src={coffeeCoup} alt="foto de um copo de café" />
      </HeroContent>

      <img src={heroBg} alt="" />
    </Hero>
  )
}
