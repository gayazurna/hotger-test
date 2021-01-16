import styled from 'styled-components'

const StyledFavourites = styled.div`
  height: 330px;
  overflow: scroll;
  box-shadow: 1px 2px 20px rgb(212, 217, 222);
  padding: 14px 26px;
  border: 1px solid #a5d6a7;
  margin-left: 40px;
  line-height: 2;
`

const StyledFavHeading = styled.h2`
  font-size: 26px;
  text-align: center;
`
const StyledButtonRemove = styled.button`
  padding-left: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export { StyledFavourites, StyledFavHeading, StyledButtonRemove }
