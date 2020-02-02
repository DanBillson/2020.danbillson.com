import styled from "styled-components"

export default styled.main`
  width: 100%;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  transition: background-color 0.3s, color 0.3s;
`
