import React from 'react'

import {
  StyledSearchResults,
  StyledSearchResult,
  StyledSearchResultName,
  StyledShowButton,
} from './style'

const SearchResults = ({ countries, onShowMoreClick }) => {
  return (
    <StyledSearchResults>
      {countries.map((country) => (
        <StyledSearchResult key={country.name}>
          <StyledSearchResultName>{country?.name}</StyledSearchResultName>
          <StyledShowButton onClick={() => onShowMoreClick(country)}>
            Show More
          </StyledShowButton>
        </StyledSearchResult>
      ))}
    </StyledSearchResults>
  )
}

export default SearchResults
