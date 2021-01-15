import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
    font-family: 'Roboto';
    box-sizing: border-box;
    color: #263238;
  }
`
const StyleApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
`
const StyleHeading = styled.h1`
  font-size: 30px;
  margin: 50px 0 40px 0;
`

export { GlobalStyle, StyleApp, StyleHeading }
