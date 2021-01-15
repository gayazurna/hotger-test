import React from 'react'
import ReactDom from 'react-dom'

import SearchForm from './components/SearchForm'
import { StoreProvider } from './context/store'
import { MainContent } from './components/MainContent'
import { GlobalStyle, StyleApp, StyleHeading } from './style'

const App = () => {
  return (
    <StoreProvider>
      <StyleApp>
        <GlobalStyle />
        <StyleHeading>
          Country Search <i class='fas fa-globe'></i>
        </StyleHeading>

        <SearchForm />
        <MainContent />
      </StyleApp>
    </StoreProvider>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
