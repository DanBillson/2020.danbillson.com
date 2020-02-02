import React, { createContext, useContext } from "react"
import createPersistedState from "use-persisted-state"

const usePersistedState = createPersistedState("state", window.sessionStorage)

export const StateContext = createContext()

export const StateProvider = ({ initialState, children }) => (
  <StateContext.Provider value={usePersistedState(initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
