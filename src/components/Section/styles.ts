import styled from 'styled-components'

import { Colors } from '../../styles'
import { CardContainer } from '../product/styles'
import { PropsSection } from '.'

export const SectionContainer = styled.section<Omit<PropsSection, 'title'>>`
  padding: 32px 0px;
  background-color: ${(props) =>
    props.background === 'black' ? Colors.black : Colors.gray};
  ${CardContainer} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.gray : Colors.black};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const TitleSection = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
