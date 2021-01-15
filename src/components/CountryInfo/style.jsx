import styled from 'styled-components'

const StyleCountryInfo = styled.div`
  line-height: 2;
  font-size: 20px;
  margin-top: 40px;
  border: 1px solid #a5d6a7;
  box-shadow: 1px 2px 20px rgb(212, 217, 222);
  padding: 20px;
`
const StyledFlag = styled.img`
  width: 100px;
  margin-left: 20px;
`

const StyleFavButton = styled.button`
  margin-top: 20px;
  width: 180px;
  background-color: #a5d6a7;
  cursor: pointer;
  font-size: 18px;
  border: none;
  border-radius: 2px;
  padding: 10px 0px;
  text-align: center;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    box-shadow: none;
  }
`
const StyleListItem = styled.li`
  display: inline;
  margin-right: 8px;
`
export { StyleCountryInfo, StyledFlag, StyleFavButton, StyleListItem }
