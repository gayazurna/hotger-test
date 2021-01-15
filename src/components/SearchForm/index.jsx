import React, { useContext } from 'react'
import { StyledForm, StyledInput, StyledButton } from './style'
import { StoreContext } from '../../context/store'
import { SET_COUNTRY_LIST, SET_COUNTRY_VIEW } from '../../context/actions'

const SearchForm = () => {
  const [input, setInput] = React.useState('')
  const { state, dispatch } = useContext(StoreContext)

  const changeHandler = (e) => {
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
  const keypressHandler = (e) => {
    if (e.key === 'Enter') {
      clickHandler()
    }
  }

  return (
    <StyledForm>
      <StyledInput
        onChange={changeHandler}
        onKeyPress={keypressHandler}
        value={input}
        type='text'
        placeholder='Type here a country name'
        required
      />
      <StyledButton onClick={clickHandler}>
        <i class='fa fa-search'></i>
      </StyledButton>
    </StyledForm>
  )
}

export default SearchForm
