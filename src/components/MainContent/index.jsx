import React, { useContext } from 'react'
import CountryInfo from '../CountryInfo'
import SearchResults from '../SearchResults'
import { SET_COUNTRY_VIEW } from '../../context/actions'
import { StoreContext } from '../../context/store'
import { StyledMainContent } from './style'

const MainContent = () => {
  const { state, dispatch } = useContext(StoreContext)

  const { countryInfo } = state

  return (
    <StyledMainContent>
      {countryInfo.name && (
        <CountryInfo
          name={countryInfo.name}
          image={countryInfo.flag}
          code={countryInfo.alpha3Code}
          languages={countryInfo.languages}
          borderCountries={countryInfo.borders}
        />
      )}

      {Boolean(state.searchResults.length) && (
        <SearchResults
          countries={state.searchResults}
          onShowMoreClick={(country) =>
            dispatch({ type: SET_COUNTRY_VIEW, payload: country })
          }
        />
      )}
    </StyledMainContent>
  )
}

export { MainContent }
