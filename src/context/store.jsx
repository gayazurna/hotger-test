import React, { createContext, useReducer } from 'react'

import { getLocalStorage } from './helpers'
import { reducer } from './reducer'

const FAVOURITE_KEY = 'favouriteCountries'

const INITIAL_STATE = {
  searchResults: [],
  countryInfo: {},
  favourites: getLocalStorage(FAVOURITE_KEY),
}

const StoreContext = createContext({
  state: INITIAL_STATE,
})

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider, FAVOURITE_KEY }
