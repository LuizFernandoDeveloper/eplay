import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styled'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.allBlack};
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${Colors.gray};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const Price = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Colors.lightGRay};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${Colors.lightGRay};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${Colors.white};
    font-wight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background: none;
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 0;

    img {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
`
