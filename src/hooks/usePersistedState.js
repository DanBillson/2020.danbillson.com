import { useState, useEffect } from "react"

export const usePersistedState = (key, initialValue) => {
  const getState = () => {
    if (typeof window !== undefined) {
      const state = window.sessionStorage.getItem(key)
      return state ? JSON.parse(state) : initialValue
    }
  }

  const [storedValue, setStoredValue] = useState(() => getState())

  useEffect(() => {
    setStoredValue(getState())
  }, [getState])

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      typeof window !== undefined &&
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
