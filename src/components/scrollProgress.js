import React from "react"
import styled from "styled-components"

const ScrollProgress = () => {
  return <ScrollProgressBar></ScrollProgressBar>
}

export default ScrollProgress

const ScrollProgressBar = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.primary};
`
