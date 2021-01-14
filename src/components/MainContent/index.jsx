import React, { useContext } from 'react'
import CountryInfo from '../CountryInfo'
import SearchResults from '../SearchResults'
import { SET_COUNTRY_VIEW, StorageContext } from '../../context/storage'

const MainContent = () => {
  const { state, dispatch } = useContext(StorageContext)

  const { countryInfo } = state

  console.log('countryInfo', countryInfo)

  return (
    <div>
      {countryInfo.name && (
        <CountryInfo
          name={countryInfo.name}
          image={countryInfo.flag}
          iso={countryInfo.numericCode}
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
