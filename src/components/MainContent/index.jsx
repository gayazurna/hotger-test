import React, { useContext } from 'react'
import CountryInfo from '../CountryInfo'
import SearchResults from '../SearchResults'
import { SET_COUNTRY_VIEW, StoreContext } from '../../context/store'

const MainContent = () => {
  const { state, dispatch } = useContext(StoreContext)

  const { countryInfo } = state

  return (
    <div>
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
    </div>
  )
}

export { MainContent }
