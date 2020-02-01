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
    <>
      <HeaderWrapper>
        <HeaderBody>
          <Logo>
            DanBillson<Highlight>.</Highlight>
          </Logo>
          <Nav>{renderThemeIcon()}</Nav>
        </HeaderBody>
      </HeaderWrapper>
      <ScrollProgress />
    </>
  )
}

export default Header

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 30px 0;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  transition: background-color 0.3s, color 0.3s;

  svg {
    width: 36px;
    fill: ${props => props.theme.fg};
    cursor: pointer;
  }
`

const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  padding: 0 5%;
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
