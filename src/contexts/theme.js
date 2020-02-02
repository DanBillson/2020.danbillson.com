import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { useStateValue } from "./state"
import { themes } from "../config/themes"

export const AppThemeProvider = ({ children }) => {
  const [theme] = useStateValue()
  console.log({ theme })

  useEffect(() => {}, [theme])

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
}
