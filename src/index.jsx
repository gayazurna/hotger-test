import React from 'react'
import ReactDom from 'react-dom'

import SearchForm from './components/SearchForm'
import { StorageProvider } from './context/storage'
import { MainContent } from './components/MainContent'
import { GlobalStyle, StyleHeading } from './style'

const App = () => {
  return (
    <StorageProvider>
      <GlobalStyle />
      <StyleHeading>Country Search</StyleHeading>
      <SearchForm />
      <MainContent />
    </StorageProvider>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
