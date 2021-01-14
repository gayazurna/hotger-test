import React from 'react'

import {
  StyleSearchResults,
  StyleSearchResult,
  StyleSearchResultName,
} from './style'

const SearchResults = ({ countries, onShowMoreClick }) => {
  return (
    <StyleSearchResults>
      {countries.map((country) => (
        <StyleSearchResult key={country.name}>
          <StyleSearchResultName>{country?.name}</StyleSearchResultName>
          <button onClick={() => onShowMoreClick(country)}>show more</button>
        </StyleSearchResult>
      ))}
    </StyleSearchResults>
  )
}

export default SearchResults
