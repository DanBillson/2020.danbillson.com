import { useState } from "react"
import useSwr from "swr"

const getSessionStorage = (key, initialValue) => {
  try {
    const state =
      typeof window !== undefined && window.sessionStorage.getItem(key)
    return state ? JSON.parse(state) : initialValue
  } catch (error) {
    return initialValue
  }
}

const useSessionStorage = (key, initialValue) =>
  useSwr([key, initialValue], getSessionStorage)

export const usePersistedState = (key, initialValue) => {
  const ssState = getSessionStorage(key, initialValue)
  const { data } = useSessionStorage(key, initialValue)
  console.log({ ssState, data })
  const [storedValue, setStoredValue] = useState(ssState)

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
