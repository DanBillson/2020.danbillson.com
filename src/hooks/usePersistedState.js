import { useState } from "react"

export const usePersistedState = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item =
        typeof window !== undefined && window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      typeof window !== undefined &&
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {}
  }

  return [storedValue, setValue]
}
