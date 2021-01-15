import React from 'react'

import {
  StyleSearchResults,
  StyleSearchResult,
  StyleSearchResultName,
  StyleShowButton,
} from './style'

const SearchResults = ({ countries, onShowMoreClick }) => {
  return (
    <StyleSearchResults>
      {countries.map((country) => (
        <StyleSearchResult key={country.name}>
          <StyleSearchResultName>{country?.name}</StyleSearchResultName>
          <StyleShowButton onClick={() => onShowMoreClick(country)}>
            Show More
          </StyleShowButton>
        </StyleSearchResult>
      ))}
    </StyleSearchResults>
  )
}

export default SearchResults
