import React from "react"
import styled from "styled-components"
import { title } from "../config"

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBody>
        <Title>{title}</Title>
      </HeroBody>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.div`
  width: 100%;
  height: 85vh;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
`

const HeroBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5%;
`

const Title = styled.h1`
  width: 70%;
  max-width: 600px;
`
