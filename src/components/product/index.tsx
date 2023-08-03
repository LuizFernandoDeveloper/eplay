import Tag from '../Tag'
import { CardContainer, DescriptionCard, Img, Infos, TitleCard } from './styles'

type PropsProduct = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: PropsProduct) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }

    return description
  }
  return (
    <CardContainer
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <Img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TitleCard>{title}</TitleCard>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <DescriptionCard>{getDescription(description)}</DescriptionCard>
    </CardContainer>
  )
}

export default Product
