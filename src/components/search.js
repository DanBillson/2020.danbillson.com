import React from "react"
import styled from "styled-components"

const Search = ({ label, ...props }) => {
  return (
    <SearchContainer>
      {label && <Label>{label}</Label>}
      <TextInput type="text" placeholder="search" {...props} />
    </SearchContainer>
  )
}

export default Search

const SearchContainer = styled.div`
  display: flex;
  align-items: baseline;
`

const Label = styled.label`
  margin-right: 24px;
  font-size: 12px;
  color: ${props => props.theme.body};
`

const TextInput = styled.input`
  margin: 8px 0 32px;
  padding: 8px 16px;
  width: 320px;
  border: ${props => `1px solid ${props.theme.fg}`};
  border-radius: 30px;
`
