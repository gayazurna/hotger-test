import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
    font-family: 'Roboto';
    box-sizing: border-box;
  }
`

const StyleHeading = styled.h1`
  font-size: 30px;
`

export { GlobalStyle, StyleHeading }
