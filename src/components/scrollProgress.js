import React, { useState, useEffect } from "react"
import styled from "styled-components"

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => setScrollPos())

      return window.removeEventListener("scroll", () => setScrollPos())
    }
  }, [])

  const setScrollPos = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    setScroll(Math.ceil((winScroll / height) * 100))
  }

  return (
    <ProgressContainer>
      <ProgressBar progress={scroll} />
    </ProgressContainer>
  )
}

export default ScrollProgress

const ProgressContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.bg};
  transition: background-color 0.3s;
`

const ProgressBar = styled.div`
  width: ${props => props.progress}%;
  height: 3px;
  background-color: ${props => props.theme.primary};
`
