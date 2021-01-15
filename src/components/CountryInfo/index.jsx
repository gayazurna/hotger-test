import React, { useContext } from 'react'
import { StoreContext } from '../../context/store'
import {
  SET_COUNTRY_VIEW,
  SET_COUNTRY_LIST,
  SET_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from '../../context/actions'

import {
  StyledCountryInfo,
  StyledFlag,
  StyledFavButton,
  StyledListItem,
  StyledCountryName,
  StyledRemoveButton,
  StyledBorderButton,
  StyledIcon,
} from './style'

const CountryInfo = ({ name, image, code, languages, borderCountries }) => {
  const { state, dispatch } = useContext(StoreContext)

  const { favourites, countryInfo } = state

  const isFavourite = favourites.some((fav) => fav.alpha3Code === code)
  console.log('FAVOR', isFavourite)

  const onFavHandler = (country) => {
    dispatch({ type: SET_FAVOURITES, payload: country })
  }
  const onRemoveFavHandler = (country) => {
    dispatch({ type: REMOVE_FROM_FAVOURITES, payload: country.alpha3Code })
  }

  const onCountryClick = async (countryCode) => {
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${countryCode}`
      )
      const result = await response.json()
      dispatch({ type: SET_COUNTRY_VIEW, payload: result })
      dispatch({ type: SET_COUNTRY_LIST, payload: [] })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <StyledCountryInfo>
      <StyledCountryName>
        {name} <StyledFlag src={image} alt='' />
      </StyledCountryName>
      <p>Code: {code}</p>

      <ul>
        Languages:{' '}
        {languages.map((lang) => (
          <StyledListItem key={lang.name}>{lang.name}</StyledListItem>
        ))}
      </ul>

      <ul>
        Borders:{' '}
        {borderCountries.map((borderCountry) => (
          <StyledListItem key={borderCountry}>
            <StyledBorderButton onClick={() => onCountryClick(borderCountry)}>
              {borderCountry}
            </StyledBorderButton>
          </StyledListItem>
        ))}
      </ul>
      {isFavourite ? (
        <StyledRemoveButton onClick={() => onRemoveFavHandler(countryInfo)}>
          <StyledIcon>
            <i class='fas fa-trash-alt'></i>
          </StyledIcon>
          Remove From Favourites
        </StyledRemoveButton>
      ) : (
        <StyledFavButton onClick={() => onFavHandler(countryInfo)}>
          <StyledIcon>
            <i class='fas fa-heart'></i>
          </StyledIcon>
          Add To Favourites
        </StyledFavButton>
      )}
    </StyledCountryInfo>
  )
}

export default CountryInfo
