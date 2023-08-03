import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import {
  CartContainer,
  Overlay,
  Price,
  Sidebar,
  Quantity,
  CartItem
} from './styles'

import close from '../../assets/icon/fechar.png'

import { RootReducer } from '../../store'
import { isClose, remove } from '../../store/reducers/Cart'
import { useDispatch } from 'react-redux'
import { parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(isClose())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.prices.current) {
        return (acumulador += valorAtual.prices.current)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button">
                <img src={close} alt="fechar" />
              </button>
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Price>
          Total de {parseToBrl(getTotalPrice())}
          <span>Em ate 6x sem juros</span>
        </Price>
        <Button
          onClick={goToCheckout}
          title="Clique aqui para continuar com a comopra "
          type="button"
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
