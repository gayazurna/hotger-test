import React from 'react'
import { StyledFavourites, StyledFavHeading, StyledButtonRemove } from './style'

const Favourites = ({ items, onRemoveFromFav }) => {
  return (
    <StyledFavourites>
      <StyledFavHeading>Favourites</StyledFavHeading>
      <ol>
        {items.map((item) => {
          return (
            <li key={item.alpha3Code}>
              {item.name}
              <StyledButtonRemove
                onClick={() => onRemoveFromFav(item.alpha3Code)}
              >
                <i class='fas fa-backspace'></i>
              </StyledButtonRemove>
            </li>
          )
        })}
      </ol>
      {!items.length && <p>No data</p>}
    </StyledFavourites>
  )
}

export { Favourites }
