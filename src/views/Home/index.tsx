import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    develeper: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSaleGames } =
    useGetOnSaleQuery()
  const { data: SoonGames, isLoading: isLoadingSoonGames } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        isLoading={isLoadingSaleGames}
        games={onSaleGames}
        title="promoções"
        background="gray"
        id="on-sale"
      />
      <ProductList
        isLoading={isLoadingSoonGames}
        games={SoonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
      />
    </>
  )
}

export default Home
