import React, { createContext, useReducer } from 'react'
const INITIAL_STATE = {
  searchResults: [],
  countryInfo: {},
  favorites: [],
}

const StorageContext = createContext({
  state: INITIAL_STATE,
})

export const SET_COUNTRY_LIST = 'SET_COUNTRY_LIST'
export const SET_COUNTRY_VIEW = 'SET_COUNTRY_VIEW'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRY_LIST:
      return { ...state, searchResults: action.payload }
    case SET_COUNTRY_VIEW:
      return { ...state, countryInfo: action.payload }
  }
}

const StorageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <StorageContext.Provider value={{ state, dispatch }}>
      {children}
    </StorageContext.Provider>
  )
}

export { StorageContext, StorageProvider }
