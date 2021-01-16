import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Roboto';
    box-sizing: border-box;
    color: #263238;
  }
`
const StyledApp = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const StyledColumns = styled.div`
  display: flex;
  // justify-conent: center;
`
const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin: 60px 0 50px 0;
`
const StyledIcon = styled.span`
  padding-left: 16px;
`

export { GlobalStyle, StyledApp, StyledHeading, StyledColumns, StyledIcon }
