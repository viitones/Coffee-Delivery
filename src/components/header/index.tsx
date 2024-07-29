import { CartContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logotipo from '../../assets/logotipo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logotipo} alt="" />
      </div>
      <nav>
        <div>
          <MapPin size={22} weight={'fill'} />
          Porto Alegre, RS
        </div>
        <CartContainer href="#">
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
