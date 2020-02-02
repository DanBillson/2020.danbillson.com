import React from "react"
import styled from "styled-components"
import { useStateValue } from "../contexts/state"
import ScrollProgress from "./scrollProgress"
import Sun from "../images/sun.svg"
import Moon from "../images/moon.svg"

const Header = () => {
  const [theme, setTheme] = useStateValue()

  const renderThemeIcon = () =>
    theme === "dark" ? (
      <Sun onClick={() => setTheme("light")} />
    ) : (
      <Moon onClick={() => setTheme("dark")} />
    )

  return (
    <Container>
      <Wrapper>
        <Body>
          <Logo>
            DanBillson<Highlight>.</Highlight>
          </Logo>
          <Nav>{renderThemeIcon()}</Nav>
        </Body>
      </Wrapper>
      <ScrollProgress />
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`

const Wrapper = styled.header`
  width: 100%;
  padding: 30px 0;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  transition: background-color 0.3s, color 0.3s;

  svg {
    width: 36px;
    fill: ${props => props.theme.fg};
    cursor: pointer;
    tranisition: 0.2s ease-in-out;

    &:hover {
      fill: ${props => props.theme.secondary};
    }
  }
`

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 5%;
  max-width: 1600px;
`

const Nav = styled.nav`
  display: flex;
`

const Logo = styled.span`
  font-size: 36px;
  font-weight: 900;
`

const Highlight = styled.span`
  color: ${props => props.theme.primary};
`
