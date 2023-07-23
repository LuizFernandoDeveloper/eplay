import { Link } from 'react-router-dom'

import { HeaderBar, CartButton, LinkItem, Links, Logo } from './styles'
import logo from '../../assets/logo/logo.svg'
import car from '../../assets/icon/carrinho.svg'

import { isOpen } from '../../store/reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(isOpen())
  }

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
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={car} alt="Carrinho de compras" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
