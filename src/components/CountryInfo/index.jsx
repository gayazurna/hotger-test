import React from 'react'
import { StyledFlag } from './style'

const CountryInfo = ({ name, image, iso, languages, borderCountries }) => {
  return (
    <div>
      <h2>
        Country: {name} | <StyledFlag src={image} alt='' />
      </h2>
      <p>Code: {iso}</p>

      <p>
        Languages:{' '}
        {languages.map((lang) => (
          <span key={lang.name}>{lang.name}</span>
        ))}
      </p>

      <p>
        Borders:{' '}
        {borderCountries.map((borderCountry) => (
          <span key={borderCountry}>{borderCountry}</span>
        ))}
      </p>
    </div>
  )
}

export default CountryInfo
