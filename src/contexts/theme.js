import React from "react"
import { ThemeProvider } from "styled-components"
import { useStateValue } from "./state"
import { themes } from "../config/themes"

export const AppThemeProvider = ({ children }) => {
  const [state] = useStateValue()

  return <ThemeProvider theme={themes[state]}>{children}</ThemeProvider>
}
