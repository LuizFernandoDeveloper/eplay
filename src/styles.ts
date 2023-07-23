import { createGlobalStyle } from 'styled-components'

export const Colors = {
  gray: '#333',
  white: '#EEEEEE',
  black: '#111',
  green: '#10AC84',
  lightGRay: '#A3A3A3',
  allBlack: '#000'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style:none;
  }

  body {
    background-color: ${Colors.black};
    color: ${Colors.white};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakPoints.desktop}){
      max-width: 80%
    }
  }
`
