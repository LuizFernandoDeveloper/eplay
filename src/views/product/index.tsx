import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Galeria'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  let idChecked: string
  idChecked = ''

  if (id) {
    idChecked = id
  }

  const { data: game } = useGetGameQuery(idChecked)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.develeper} <br />
          <b>Editora:</b> {game.details.publisher}
          <b>Idiomas:</b>O jogo oferece suporte a diversos idiomas, incluindo
          {game.details.languages.join(', ')} entre outros. As opções de áudio e
          legendas podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        galerry={game.media.gallery}
      />
    </>
  )
}

export default Product
