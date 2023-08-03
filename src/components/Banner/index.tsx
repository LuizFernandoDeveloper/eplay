import { useGetFeatureGameQuery } from '../../services/api'

import Tag from '../Tag'
import Button from '../Button'

import { BannerImage, Preice, Title } from './styles'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader></Loader>
  }
  return (
    <BannerImage style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Preice>
            De R$ <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
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
