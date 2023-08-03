import {
  FooterContainer,
  SectionTitle,
  ListLinks,
  FooterSection,
  LinkFooter
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
              <LinkFooter
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#RPG"
              >
                RPG
              </LinkFooter>
            </li>
            <li>
              <LinkFooter
                title="Clique aqui para acessar jogos  ação"
                to={'/categories#action'}
              >
                AÇÃO
              </LinkFooter>
            </li>
            <li>
              <LinkFooter
                title="Clique aqui para acessar jogos esportes"
                to={'/categories#sports'}
              >
                ESPORTES
              </LinkFooter>
            </li>
            <li>
              <LinkFooter
                title="Clique aqui para acessar jogos simulação"
                to={'/categories#simulation'}
              >
                SIMULAÇÃO
              </LinkFooter>
            </li>
            <li>
              <LinkFooter
                title="Clique aqui para acessar jogos luta"
                to={'/categories#fight'}
              >
                Luta
              </LinkFooter>
            </li>
          </ListLinks>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <ListLinks>
            <li>
              <LinkFooter
                title="Clique aqui para acessar promoções "
                to="/#on-sale"
              >
                Promoções
              </LinkFooter>
            </li>
            <li>
              <LinkFooter
                title="
              Clique aqui para acessar em breve "
                to="/#coming-soon"
              >
                Em breve
              </LinkFooter>
            </li>
          </ListLinks>
        </FooterSection>
        <p>{CurrentYear} - &copy; E-PLAY todos os direitos reservados</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
