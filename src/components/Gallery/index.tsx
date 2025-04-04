import { useState } from 'react'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import Section from '../Section'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'
import close from '../../assets/images/close.png'
import { GalleyItem } from '../../pages/Home'

const mock: GalleyItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=zxRd9fqUJO7E4NfU'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleyItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMEdiaCover = (item: GalleyItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMEdiaIcon = (item: GalleyItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMEdiaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMEdiaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
