import { useState, useEffect, useCallback } from "react"

export const usePersistedState = (key, initialValue) => {
  const getState = useCallback(() => {
    try {
      const state =
        typeof window !== undefined && window.sessionStorage.getItem(key)
      return state ? JSON.parse(state) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  }, [key, initialValue])

  const [storedValue, setStoredValue] = useState(() => getState())

  useEffect(() => {
    setStoredValue(getState())
    console.log(getState())
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
