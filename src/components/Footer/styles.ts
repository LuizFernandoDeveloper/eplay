import styled from 'styled-components'
import { Colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${Colors.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: bold;
`
export const ListLinks = styled.ul`
  display: flex;
  margin-top: 16px;
`
export const Link = styled.a`
  color: ${Colors.lightGRay};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.section`
  margin-bottom: 64px;
`