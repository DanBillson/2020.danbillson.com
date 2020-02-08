import { useState } from "react"

const isBrowser = () => typeof window !== undefined

export const usePersistedState = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    return isBrowser() && window.sessionStorage.getItem(key)
      ? JSON.parse(isBrowser() && window.sessionStorage.getItem(key))
      : initialValue
  })

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [storedValue, setValue]
}
