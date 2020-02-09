import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { useStateValue } from "./state"
import { themes } from "../config/themes"

export const AppThemeProvider = ({ children }) => {
  const [state] = useStateValue()
  const [theme, setTheme] = useState(themes[state])

  useEffect(() => {
    setTheme(themes[state])
  }, [state])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
