import React, { createContext, useContext } from "react"
import createPersistedState from "use-persisted-state"

const sessionStorage = () => {
  if (typeof window !== undefined) return window.sessionStorage
}

const usePersistedState = createPersistedState("state", sessionStorage())

export const StateContext = createContext()

export const StateProvider = ({ initialState, children }) => (
  <StateContext.Provider value={usePersistedState(initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
