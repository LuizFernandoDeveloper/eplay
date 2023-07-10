import styled from 'styled-components'
import { Colors } from '../../styles'
import { PropsButton } from '.'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button<PropsButton>`
  border: 2px solid ${Colors.white};
  color: ${Colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${Colors.white};
  color: ${Colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
