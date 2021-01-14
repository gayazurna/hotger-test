import React from 'react'
import ReactDom from 'react-dom'

import SearchForm from './components/SearchForm'
import { StorageProvider } from './context/storage'
import { MainContent } from './components/MainContent'

const App = () => {
  return (
    <StorageProvider>
      <h1>Country Search</h1>
      <SearchForm />
      <MainContent />
    </StorageProvider>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
