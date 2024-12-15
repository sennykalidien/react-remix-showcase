import { useCallback, useContext } from 'react'
import { FlightsContext, FlightsDispatchActionType } from '~/context'
import { getFlightsFromApiBySearchQuery, getFlightsFromApi } from '~/utils'
import { Flight, SortDirection } from '~/types'
import { sortFlightsByTime } from '~/utils'

const useFlights = () => {
  const { state, dispatch } = useContext(FlightsContext)

  const setIsFetching = (isFetching: boolean) =>
    dispatch({ type: FlightsDispatchActionType.fetchingFlights, payload: { isFetching } })
  const setFlightsData = (flights: Flight[] | undefined) =>
    dispatch({ type: FlightsDispatchActionType.successFetchingFlights, payload: { flights } })
  const setFetchingError = (error: Error | undefined) =>
    dispatch({ type: FlightsDispatchActionType.errorFetchingFlights, payload: { error: error } })

  const getFlights = useCallback(async () => {
    try {
      setFetchingError(undefined)
      setIsFetching(true)
      const data = await getFlightsFromApi()

      console.log(data)

      setFlightsData(data)
    } catch (error) {
      setFetchingError(error as Error)
    } finally {
      setIsFetching(false)
    }
  }, [])

  const getFlightsByQuery = useCallback(async (query: string) => {
    try {
      setIsFetching(true)
      setFetchingError(undefined)

      const data = await getFlightsFromApiBySearchQuery(query)

      setFlightsData(data)
    } catch (error) {
      void dispatch({ type: FlightsDispatchActionType.errorFetchingFlights, payload: { error: error as Error } })
    } finally {
      setIsFetching(false)
    }
  }, [])

  const sortFlights = useCallback(
    (direction: SortDirection) => {
      const { flights } = state

      if (!flights || flights.length === 0) return

      const sortedFlights = sortFlightsByTime(flights, direction)
      setFlightsData(sortedFlights)
    },
    [state.flights],
  )

  const searchFlights = async (searchQuery: string) => await getFlightsByQuery(searchQuery)
  const initQuery = () => void getFlights()
  const resetFlights = () => setFlightsData(undefined)

  return {
    ...state,
    sortFlights,
    searchFlights,
    resetFlights,
    initQuery,
  }
}

export default useFlights
