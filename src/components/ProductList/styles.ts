import styled from 'styled-components'
import { PropsProductList } from '.'
import { Colors } from '../../styles'
import { CardContainer } from '../product/styles'
export const ProductListContainer = styled.section<
  Omit<PropsProductList, 'title' | 'games'>
>`
  padding: 32px 0px;
  background-color: ${(props) =>
    props.background === 'black' ? Colors.black : Colors.gray};
  ${CardContainer} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.gray : Colors.black};
  }
`
export const TitleProductList = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const ListProducts = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`
