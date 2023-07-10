import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, LinkItem, Links, Logo } from './styles'
import logo from '../../assets/svgs/logo.svg'
import car from '../../assets/svgs/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <Logo src={logo} alt="Eplay" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="#">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="#">Promoções</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - produto(s)
        <img src={car} alt="Carrinho de compras" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
