import ProductList from '../../components/ProductList'
import Game from '../../models/Game/Game'

//promotion
import resident from '../../assets/images/resident.png'
import fifa23 from '../../assets/images/fifa23.png'

//shortly
import diablo4 from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import streetFighter from '../../assets/images/Street_Fighter_6.png'
import TheLegendOfZelda from '../../assets/images/zelda.png'

const promotion: Game[] = [
  {
    id: 1,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$199,90', '-10%'],
    system: 'windows',
    title: 'Resident Evil 4 - Remake'
  },
  {
    id: 2,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$199,90', '-10%'],
    system: 'windows',
    title: 'Resident Evil 4 - Remake'
  },
  {
    id: 3,
    category: 'Esportes',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa23,
    infos: ['R$99,90', '-50%'],
    system: 'windows',
    title: 'FIFA 23'
  },
  {
    id: 4,
    category: 'Esportes',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa23,
    infos: ['R$99,90', '-50%'],
    system: 'windows',
    title: 'FIFA 23'
  }
]

const shortly: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo4,
    infos: ['05/04'],
    system: 'windows',
    title: 'Diablo 4'
  },
  {
    id: 2,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['05/04'],
    system: 'windows',
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 3,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: streetFighter,
    infos: ['05/09'],
    system: 'windows',
    title: 'Street Fighter 6'
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: TheLegendOfZelda,
    infos: ['10/09'],
    system: 'windows',
    title: 'The Legend of Zelda - TOK'
  }
]

const Categories = () => {
  return (
    <>
      <ProductList games={promotion} title="RPG" background="gray" />
      <ProductList games={shortly} title="Ação" background="black" />
      <ProductList games={promotion} title="Aventura" background="gray" />
      <ProductList games={shortly} title="FPS" background="black" />
    </>
  )
}

export default Categories
