import styled from 'styled-components'

const StyleForm = styled.div`
  font-size: 36px;
`
const StyleInput = styled.input`
  width: 400px;
  padding: 8px 8px;
  font-size: 20px;
  margin-right: 10px;
`
const StyleButton = styled.button`
  width: 60px;
  background-color: #a5d6a7;
  cursor: pointer;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  padding: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    box-shadow: none;
  }
`

export { StyleForm, StyleInput, StyleButton }
