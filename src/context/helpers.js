import { FAVOURITE_KEY } from './store'
const getLocalStorage = (key) => {
  const favFromStorage = localStorage.getItem(key)
  const parsedData = JSON.parse(favFromStorage)

  if (typeof favFromStorage === 'string' && typeof parsedData === 'object') {
    return parsedData
  } else return []
}

const setToLocalStorage = (countries) => {
  localStorage.setItem(FAVOURITE_KEY, JSON.stringify(countries))
}

export { getLocalStorage, setToLocalStorage }
