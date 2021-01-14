import React, { useContext } from 'react'

import {
  StorageContext,
  SET_COUNTRY_LIST,
  SET_COUNTRY_VIEW,
} from '../../context/storage'

const SearchForm = () => {
  const [input, setInput] = React.useState('')
  const { state, dispatch } = useContext(StorageContext)

  const changeHandler = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const getCountryInfo = async (countryName) => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${countryName}`
    )

    const result = await response.json()

    if (result.length === 1) {
      const [firstCountry] = result
      dispatch({ type: SET_COUNTRY_VIEW, payload: firstCountry })
      dispatch({ type: SET_COUNTRY_LIST, payload: [] })
    } else {
      dispatch({ type: SET_COUNTRY_VIEW, payload: {} })
      dispatch({ type: SET_COUNTRY_LIST, payload: result })
    }
  }

  const clickHandler = async () => {
    await getCountryInfo(input)
  }

  return (
    <div>
      <input
        onChange={changeHandler}
        value={input}
        type='text'
        placeholder='Country name'
        required
      />
      <button onClick={clickHandler}>Search</button>
    </div>
  )
}

export default SearchForm
