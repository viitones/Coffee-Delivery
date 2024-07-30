import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { coffees } from '../../../data.json'
import coffee from '../../assets/coffee_delivery.png'
import { Card } from '../../components/card'
import { DivContainer, DivNavigate, MainContainer } from './styles'

export function Home() {
  return (
    <DivContainer>
      <header>
        <aside>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <DivNavigate>
            <div>
              <p>
                <span>
                  <ShoppingCart size={16} weight="fill" color="white" />
                </span>
                Compra simples e segura
              </p>
              <p>
                <span>
                  <Timer size={16} weight="fill" color="white" />
                </span>
                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <p>
                <span>
                  <Package size={16} weight="fill" color="white" />
                </span>
                Embalagem mantém o café intacto
              </p>
              <p>
                <span>
                  <Coffee size={16} weight="fill" color="white" />
                </span>
                O café chega fresquinho até você
              </p>
            </div>
          </DivNavigate>
        </aside>
        <figure>
          <img
            src={coffee}
            alt="imagem de um copo de café da marca coffee delivery"
          />
        </figure>
      </header>
      <MainContainer>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </div>
      </MainContainer>
    </DivContainer>
  )
}
