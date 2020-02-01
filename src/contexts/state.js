import React, { createContext, useState, useContext } from "react"

export const StateContext = createContext()

export const StateProvider = ({ initialState, children }) => (
  <StateContext.Provider value={useState(initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
