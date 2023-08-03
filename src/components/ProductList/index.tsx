import { parseToBrl } from '../../utils'
import { Game } from '../../views/Home'
import Loader from '../Loader'
import Product from '../product'
import { ListProducts, ProductListContainer } from './styles'

export type PropsProductList = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id: string
  isLoading: boolean
}

const ProductList = ({
  title,
  background,
  games,
  id,
  isLoading
}: PropsProductList) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader></Loader>
  }

  return (
    <ProductListContainer id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <ListProducts>
          {games &&
            games.map((game) => (
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
