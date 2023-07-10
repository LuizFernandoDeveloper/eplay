import Tag from '../Tag'
import { CardContainer, DescriptionCard, Img, Infos, TitleCard } from './styles'

type PropsProduct = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: PropsProduct) => {
  return (
    <CardContainer>
      <Img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TitleCard>{title}</TitleCard>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <DescriptionCard>{description}</DescriptionCard>
    </CardContainer>
  )
}

export default Product
