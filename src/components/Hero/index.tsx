import { Banner, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../views/Home'
import { formatPrice } from '../ProductList'
import { useDispatch } from 'react-redux'
import { add, isOpen } from '../../store/reducers/Cart'

type PropsHero = {
  game: Game
}

const Hero = ({ game }: PropsHero) => {
  const dispatch = useDispatch()

  const addToGame = () => {
    dispatch(add(game))
    dispatch(isOpen())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por ${formatPrice(game.prices.current)} </>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="clique aqui para adicionar esse jogo ao carrinho"
              variant="primary"
              onClick={addToGame}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
