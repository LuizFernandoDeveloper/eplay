import { BannerImage, Preice, Title } from './styles'
import image from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
const Banner = () => {
  return (
    <BannerImage style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
          <Preice>
            De R$ <span>250,00</span> <br />
            por apenas R$ 99,90
          </Preice>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </BannerImage>
  )
}

export default Banner
