import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.div`
  background-color: ${Colors.gray};
  border-radius: 8px;
  padding: 8px;
  display: inline-block;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Img = styled.img`
  border-radius: 8px;
`
export const TitleCard = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 15px;
  margin-bottom: 8px;
`
export const DescriptionCard = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  width: 200px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
