import styled from 'styled-components'

const StyledSearchResults = styled.div`
  width: 500px;
  margin-top: 40px;
`

const StyledSearchResult = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8f5e9;
  &:hover {
    background-color: #f1f8e9;
  }
`

const StyledSearchResultName = styled.div`
  font-size: 20px;
  text-align: center;
  height: 40px;
  line-height: 40px;
`

const StyledShowButton = styled.div`
  width: 100px;
  background-color: #a5d6a7;
  cursor: pointer;
  font-size: 18px;
  border: none;
  border-radius: 2px;
  padding: 10px 0px;
  text-align: center;
  heigth: 30px;
  line-heigth: 30px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    box-shadow: none;
  }
`

export {
  StyledSearchResults,
  StyledSearchResult,
  StyledSearchResultName,
  StyledShowButton,
}
