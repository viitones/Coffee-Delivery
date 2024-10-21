import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { AsideHero, Hero } from './styles'

import coffeeCoup from '../../assets/coffee-coup.svg'

export function Menu() {
  return (
    <Hero>
      <AsideHero>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café
            onde estiver, a qualquer hora
          </p>
        </div>

        <div>
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
        </div>
      </AsideHero>
      <img src={coffeeCoup} alt="foto de um copo de café" />
    </Hero>
  )
}
