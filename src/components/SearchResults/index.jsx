import React from 'react'

const SearchResults = ({ countries, onShowMoreClick }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name}>
          <div>{country?.name}</div>
          <button onClick={() => onShowMoreClick(country)}>show more</button>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
