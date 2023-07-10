import {
  FooterContainer,
  SectionTitle,
  ListLinks,
  Link,
  FooterSection
} from './styles'

const CurrentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <ListLinks>
            <li>
              <Link>RPG</Link>
            </li>
            <li>
              <Link>AÇÃO</Link>
            </li>
            <li>
              <Link>AVENTURA</Link>
            </li>
            <li>
              <Link>ESPORTES</Link>
            </li>
            <li>
              <Link>SIMULAÇÃO</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
          </ListLinks>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <ListLinks>
            <li>
              <Link>Novidades</Link>
            </li>
          </ListLinks>
        </FooterSection>
        <p>{CurrentYear} - &copy; E-PLAY todos os direitos reservados</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
