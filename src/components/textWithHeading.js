import React from "react"
import styled from "styled-components"
import Wrapper from "./wrapper"
import Heading from "./heading"

const TextWithHeading = ({ title, body }) => {
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <Body>{body}</Body>
    </Wrapper>
  )
}

export default TextWithHeading

const Body = styled.p`
  max-width: 600px;
  color: ${props => props.theme.body};
  font-size: 16px;
`
