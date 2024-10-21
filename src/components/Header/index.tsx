import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { AsideMenu, HeaderMenu } from './styles'

export function Header() {
  return (
    <HeaderMenu>
      <img src={logo} alt="logo do Coffee-Delivery, um copo de café roxo" />

      <AsideMenu>
        <div>
          <MapPin weight="fill" />
          <span>Porto alegre</span>
        </div>

        <div>
          <ShoppingCart weight="fill" />
        </div>
      </AsideMenu>
    </HeaderMenu>
  )
}
