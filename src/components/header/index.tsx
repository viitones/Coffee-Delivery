import { CartContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import logotipo from '../../assets/logotipo.svg'

export function Header() {
  const theme = useTheme()

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
          <ShoppingCart color={theme['dark-yellow']} size={22} weight="fill" />
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
