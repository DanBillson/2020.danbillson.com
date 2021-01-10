import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStateValue } from "../contexts/state"
import ScrollProgress from "./scrollProgress"
import Sun from "../images/sun.svg"
import Moon from "../images/moon.svg"

const ThemeIcon = props => {
  const [theme, setTheme] = useStateValue()

  return theme === "dark" ? (
    <Sun onClick={() => setTheme("light")} {...props} />
  ) : (
    <Moon onClick={() => setTheme("dark")} {...props} />
  )
}

const Header = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Body>
            <Logo to="/">
              D<LogoLong>anBillson</LogoLong>
              <Highlight>.</Highlight>
            </Logo>
            <Nav>
              <NavLink to="/media">media</NavLink>
              <NavLink to="/cheer">cheer</NavLink>
              <ThemeIcon />
            </Nav>
          </Body>
        </Wrapper>
        <ScrollProgress />
      </Container>
      <Block />
    </>
  )
}

export default Header

const Block = styled.div`
  height: 96px;
`

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
    margin-left: 12px;
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
  align-items: center;
`

const NavLink = styled(Link)`
  padding: 0 16px;
  color: ${props => props.theme.fg};
  text-decoration: none;
`

const Logo = styled(Link)`
  color: ${props => props.theme.fg};
  text-decoration: none;
  font-size: 36px;
  font-weight: 900;
`

const LogoLong = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`

const Highlight = styled.span`
  color: ${props => props.theme.primary};
`
