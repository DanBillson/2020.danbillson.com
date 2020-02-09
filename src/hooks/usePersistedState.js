import { useState, useEffect } from "react"

const getState = (key, initialValue) => {
  return typeof window !== undefined && window.sessionStorage.getItem(key)
    ? JSON.parse(window.sessionStorage.getItem(key))
    : initialValue
}

export const usePersistedState = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() =>
    getState(key, initialValue)
  )

  useEffect(() => {
    setStoredValue(getState(key, initialValue))
  }, [key, initialValue])

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
