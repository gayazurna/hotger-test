import React from 'react'
import {
  StyleCountryInfo,
  StyledFlag,
  StyleFavButton,
  StyleListItem,
} from './style'

const CountryInfo = ({ name, image, code, languages, borderCountries }) => {
  const [favourites, setFavourites] = React.useState([])

  const onFavHandler = () => {
    const newFav = [...images]
    localStorage.setItem('favourites', JSON.stringify(newFav))
    setImages(newFav)
  }
  return (
    <StyleCountryInfo>
      <h2>
        {name} <StyledFlag src={image} alt='' />
      </h2>
      <p>Code: {code}</p>

      <ul>
        Languages:{' '}
        {languages.map((lang) => (
          <StyleListItem key={lang.name}>{lang.name}</StyleListItem>
        ))}
      </ul>

      <ul>
        Borders:{' '}
        {borderCountries.map((borderCountry) => (
          <StyleListItem key={borderCountry}>
            {borderCountry}
            <button></button>
          </StyleListItem>
        ))}
      </ul>
      <StyleFavButton onClick={onFavHandler}>
        <i class='far fa-heart'></i>
        Add To Favourites
      </StyleFavButton>
    </StyleCountryInfo>
  )
}

export default CountryInfo
