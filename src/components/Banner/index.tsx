import { useGetFeatureGameQuery } from '../../services/api'

import { BannerImage, Preice, Title } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { formatPrice } from '../ProductList'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>..Carregando</h3>
  }
  return (
    <BannerImage style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Preice>
            De R$ <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </Preice>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </BannerImage>
  )
}

export default Banner
