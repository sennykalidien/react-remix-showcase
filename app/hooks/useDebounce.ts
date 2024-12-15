import { useCallback, useEffect, useState } from 'react'

const defaultDebounceDelay = 500

const useDebounce = (delay: number = defaultDebounceDelay) => {
  const [debouncedValue, setDebouncedValue] = useState<string>('')
  const [value, setValue] = useState<string>('')

  const debounce = useCallback((value: string): void => {
    setValue(value)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return {
    debounce,
    debouncedValue,
  }
}

export default useDebounce
