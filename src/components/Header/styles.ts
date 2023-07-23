import styled from 'styled-components'
import { Colors, breakPoints } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${Colors.gray};
  padding: 22px 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;

  a {
    color: ${Colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }
`
export const Logo = styled.img`
  height: 40px;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }
`
