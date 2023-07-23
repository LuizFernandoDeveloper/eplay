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
              <LinkFooter to="/categories#RPG">RPG</LinkFooter>
            </li>
            <li>
              <LinkFooter to={'/categories#action'}>AÇÃO</LinkFooter>
            </li>
            <li>
              <LinkFooter to={'/categories#sports'}>ESPORTES</LinkFooter>
            </li>
            <li>
              <LinkFooter to={'/categories#simulation'}>SIMULAÇÃO</LinkFooter>
            </li>
            <li>
              <LinkFooter to={'/categories#fight'}>Luta</LinkFooter>
            </li>
          </ListLinks>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <ListLinks>
            <li>
              <LinkFooter to="/#on-sale">Promoções</LinkFooter>
            </li>
            <li>
              <LinkFooter to="/#coming-soon">Em breve</LinkFooter>
            </li>
          </ListLinks>
        </FooterSection>
        <p>{CurrentYear} - &copy; E-PLAY todos os direitos reservados</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
