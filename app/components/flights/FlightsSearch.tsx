import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { TextField, InputError } from '~/components/common'
import { useFlights, useDebounce } from '~/hooks'
import { validateQuery } from '~/utils'

interface FlightSearchProps {
  initialFocus?: boolean
}

function FlightsSearch({ initialFocus = false }: FlightSearchProps) {
  const { searchFlights, error: searchError } = useFlights()
  const [value, setValue] = useState<string>('')
  const { debounce: debounceSearchQuery, debouncedValue: searchQuery } = useDebounce(500)
  const [inputError, setInputError] = useState<Error | undefined>(undefined)
  const error = searchError || inputError

  const handleSeachQuery = (query: string) => {
    const isValid = validateQuery(query)

    if (isValid) {
      void searchFlights(query)
    }
  }

  /**
   * Handle submit
   * If user manually press enter, give feedback on entering more characters before searching
   */
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const isValid = validateQuery(value)

      if (isValid) {
        handleSeachQuery(value)
      } else {
        const error = new Error('Please enter more than 3 characters')
        setInputError(error)
      }
    },
    [value],
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputError(undefined)

    const value = e.target.value
    setValue(value)
    debounceSearchQuery(value)
  }

  useEffect(() => {
    handleSeachQuery(searchQuery)
  }, [searchQuery])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          id="flights-search"
          name="flights-search"
          type="search"
          placeholder="Enter the airport destination"
          className="w-full border-s-2 border-amber-900"
          defaultValue={value}
          onChange={handleChange}
          hasError={!!error}
          autoFocus={initialFocus}
          autoComplete="off"
          autoCorrect="off"
          spellcheck="false"
          aria-label="the airport destination"
        />
        {error && <InputError className="mt-2">{error.message}</InputError>}
      </div>
    </form>
  )
}

export default FlightsSearch
