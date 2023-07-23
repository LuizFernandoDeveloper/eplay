import { Colors, breakPoints } from '../../styles'
import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  display: block;

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  padding-top: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    background-size: cover;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }
  ${TagContainer} {
    margin-right: 8px;
  }
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${Colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
