import React from "react"
import styled from "styled-components"
import { social } from "../config"

const Footer = () => {
  const renderSocial = () =>
    social.map(({ icon, link }) => (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    ))

  return <Wrapper>{renderSocial()}</Wrapper>
}

export default Footer

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px 50px;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  transition: background-color 0.3s, color 0.3s;

  svg {
    padding: 20px;
    width: 90px;
    fill: ${props => props.theme.fg};
    cursor: pointer;
  }
`
