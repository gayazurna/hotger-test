import {
  SET_COUNTRY_LIST,
  SET_COUNTRY_VIEW,
  SET_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from './actions'

import { setToLocalStorage } from './helpers'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRY_LIST:
      return { ...state, searchResults: action.payload }
    case SET_COUNTRY_VIEW:
      return { ...state, countryInfo: action.payload }
    case SET_FAVOURITES:
      const newFavourites = [...state.favourites, action.payload]
      setToLocalStorage(newFavourites)
      return { ...state, favourites: newFavourites }
    case REMOVE_FROM_FAVOURITES:
      const removedFavourites = state.favourites.filter(
        (item) => item.alpha3Code !== action.payload
      )
      setToLocalStorage(removedFavourites)
      return {
        ...state,
        favourites: removedFavourites,
      }
    default:
      return state
  }
}

export { reducer }
