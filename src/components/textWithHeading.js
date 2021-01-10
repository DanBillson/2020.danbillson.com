import React from "react"
import styled from "styled-components"
import Heading from "./heading"

const TextWithHeading = ({ title, body }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Body>{body}</Body>
    </>
  )
}

export default TextWithHeading

const Body = styled.p`
  max-width: 600px;
  color: ${props => props.theme.body};
  font-size: 16px;
`
