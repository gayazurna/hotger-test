import React, { useContext } from 'react'
import ReactDom from 'react-dom'

import SearchForm from './components/SearchForm'
import { StoreContext, StoreProvider } from './context/store'
import { REMOVE_FROM_FAVOURITES } from './context/actions'
import { MainContent } from './components/MainContent'
import { Favourites } from './components/Favourites'

import {
  GlobalStyle,
  StyledApp,
  StyledHeading,
  StyledColumns,
  StyledIcon,
} from './style'

const App = () => {
  const { state, dispatch } = useContext(StoreContext)

  return (
    <StyledApp>
      <GlobalStyle />
      <StyledHeading>
        Country Search{' '}
        <StyledIcon>
          <i class='fas fa-globe'></i>
        </StyledIcon>
      </StyledHeading>
      <StyledColumns>
        <div>
          <SearchForm />
          <MainContent />
        </div>
        <Favourites
          items={state.favourites}
          onRemoveFromFav={(alpha3code) =>
            dispatch({ type: REMOVE_FROM_FAVOURITES, payload: alpha3code })
          }
        />
      </StyledColumns>
    </StyledApp>
  )
}

ReactDom.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
