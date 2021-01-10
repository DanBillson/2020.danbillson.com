import React from "react"
import styled from "styled-components"
import Dev from "../images/dev.svg"

const Hero = ({ title }) => {
  return (
    <HeroWrapper>
      <HeroBody>
        <Title>{title}</Title>
        <DevImage />
      </HeroBody>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.div`
  height: 85vh;
`

const HeroBody = styled.div`
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 0 5%;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`

const Title = styled.h1`
  padding-top: 140px;
  width: 90%;
  max-width: 700px;
  font-weight: 900;
  line-height: 50px;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    padding-top: 0;
    line-height: 70px;
  }
`

const DevImage = styled(Dev)`
  position: absolute;
  margin: 0 auto;
  width: 80%;
  max-width: 400px;
  right: 10%;
  bottom: -5%;
  z-index: 0;

  @media only screen and (min-width: 768px) {
    right: 15%;
    bottom: 10%;
  }
`
