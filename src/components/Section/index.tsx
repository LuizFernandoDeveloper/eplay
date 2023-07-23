import { SectionContainer, TitleSection } from './styles'

export type PropsSection = {
  title: string
  background: 'gray' | 'black'
  children: JSX.Element
}

const Section = ({ title, background, children }: PropsSection) => {
  return (
    <SectionContainer background={background}>
      <div className="container">
        <TitleSection>{title}</TitleSection>
        {children}
      </div>
    </SectionContainer>
  )
}

export default Section
