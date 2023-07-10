import Game from '../../models/Game/Game'
import Product from '../product'
import { ListProducts, ProductListContainer } from './styles'

export type PropsProductList = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: PropsProductList) => {
  return (
    <ProductListContainer background={background}>
      <div className="container">
        <h2>{title}</h2>
        <ListProducts>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </ListProducts>
      </div>
    </ProductListContainer>
  )
}

export default ProductList
