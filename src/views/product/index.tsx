import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import Section from '../../components/Section'
import Gallery from '../../components/Galeria'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams // usado no lugar de if de verificação.

  let idChecked: string
  idChecked = ''

  if (id) {
    // GamesParams usado no lugar desse if
    idChecked = id
  }

  const { data: game } = useGetGameQuery(idChecked)

  if (!game) {
    return <Loader></Loader>
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
