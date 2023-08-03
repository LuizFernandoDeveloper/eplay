import { Link } from 'react-router-dom'

import {
  HeaderBar,
  CartButton,
  LinkItem,
  Links,
  Logo,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/logo/logo.svg'
import car from '../../assets/icon/carrinho.svg'

import { isOpen } from '../../store/reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  const [mobile, setMobile] = useState(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(isOpen())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setMobile(!mobile)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <Logo src={logo} alt="Eplay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar Novidades"
                  to="/#coming-soon"
                >
                  Novidades
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} - <span>produto(s)</span>
          <img src={car} alt="Carrinho de compras" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={mobile ? 'is-open ' : ''}>
        <Links>
          <LinkItem>
            <Link onClick={() => setMobile(false)} to="/categories">
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar Novidades"
              to="/#coming-soon"
              onClick={() => setMobile(false)}
            >
              Novidades
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar promoções"
              to="/#on-sale"
              onClick={() => setMobile(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
