import styled from 'styled-components'
import { Colors, breakPoints } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  @media (max-width: ${breakPoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`
export const HeaderBar = styled.header`
  background-color: ${Colors.gray};
  padding: 22px 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  font-size: 20px;

  a {
    color: ${Colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`
export const Logo = styled.img`
  height: 40px;
`
export const NavMobile = styled.nav`
  display: block;
  max-height: 0px;
  height: 100%;
  overflow: hidden;
  transition: max-height 3s ease;

  &.is-open {
    max-height: 168px;
    transition: max-height 3s ease;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    margin-rifht: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
export const CartButton = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${Colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakPoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
