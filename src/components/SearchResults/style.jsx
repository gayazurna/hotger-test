import styled from 'styled-components'

const StyleSearchResults = styled.div`
  width: 800px;
`

const StyleSearchResult = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b0e0e6;

  &:hover {
    background-color: #b0e0e6;
  }
`

const StyleSearchResultName = styled.div`
  font-size: 16px;
`

export { StyleSearchResults, StyleSearchResult, StyleSearchResultName }
