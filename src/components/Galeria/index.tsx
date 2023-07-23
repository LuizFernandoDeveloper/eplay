import Section from '../Section'
import Play from '../../assets/icon/play.png'
import Zoom from '../../assets/icon/zoom.png'
import Close from '../../assets/icon/fechar.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { GalleryItem } from '../../views/Home'

type PropsGallery = {
  defaultCover: string
  name: string
  galerry: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, galerry }: PropsGallery) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisible: false
  })
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  const closeModal = () => {
    setModal({
      type: 'image',
      url: '',
      isVisible: false
    })
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {galerry.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  type: media.type,
                  url: media.url,
                  isVisible: true
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar imagem "
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={Close} alt="Fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={name} />
          ) : (
            <iframe frameBorder={0} title={name} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
