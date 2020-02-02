import React, { createContext, useContext } from "react"
import { usePersistedState } from "../hooks/usePersistedState"

export const StateContext = createContext()

export const StateProvider = ({ initialState, children }) => (
  <StateContext.Provider value={usePersistedState("state", initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
