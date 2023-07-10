import styled from 'styled-components'
import { Colors } from '../../styles'

import { PropsTag } from '.'

export const TagContainer = styled.div<PropsTag>`
  background-color: ${Colors.green};
  color: ${Colors.white};
  display: inline-block;
  font-weight: bold;
  border-radius: 8px;
  padding: ${(propsTag) =>
    propsTag.size === 'big' ? '8px  16px' : ' 4px 6px'};
  font-size: ${(propsTag) => (propsTag.size === 'big' ? '16px' : '10px')};
`
