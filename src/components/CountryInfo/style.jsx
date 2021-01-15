import styled from 'styled-components'

const StyledCountryInfo = styled.div`
  width: 500px;
  line-height: 2;
  font-size: 20px;
  margin-top: 40px;
  border: 1px solid #a5d6a7;
  box-shadow: 1px 2px 20px rgb(212, 217, 222);
  padding: 20px;
`
const StyledCountryName = styled.h2`
  font-size: 26px;
`
const StyledFlag = styled.img`
  width: 100px;
  margin-left: 20px;
  display: inline-block;
  float: right;
`

const StyledFavButton = styled.button`
  margin-top: 10px;
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
const StyledRemoveButton = styled.button`
  margin-top: 10px;
  width: 180px;
  height: 42px;
  background-color: #bdbdbd;
  cursor: pointer;
  font-size: 15px;
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
const StyledBorderButton = styled.button`
  width: 40px;
  background-color: #e8f5e9;
  cursor: pointer;
  font-size: 18px;
  border: none;
  border-radius: 2px;
  padding: 4px 0px;
  text-align: center;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    box-shadow: none;
  }
`

const StyledListItem = styled.li`
  display: inline;
  margin-right: 8px;
`
const StyledIcon = styled.span`
  padding-right: 8px;
`

export {
  StyledCountryInfo,
  StyledCountryName,
  StyledFlag,
  StyledFavButton,
  StyledRemoveButton,
  StyledListItem,
  StyledBorderButton,
  StyledIcon,
}
