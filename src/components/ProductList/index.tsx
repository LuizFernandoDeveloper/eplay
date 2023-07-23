import { Game } from '../../views/Home'
import Product from '../product'
import { ListProducts, ProductListContainer } from './styles'

export type PropsProductList = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id: string
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductList = ({ title, background, games, id }: PropsProductList) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }

  return (
    <ProductListContainer id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <ListProducts>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </ListProducts>
      </div>
    </ProductListContainer>
  )
}

export default ProductList
