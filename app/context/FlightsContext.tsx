import React, { createContext, Dispatch, useEffect, useReducer } from 'react'
import { Flight } from "~/types";

interface FlightsState {
  flights: Flight[] | undefined
  isFetching: boolean
  error: Error | undefined
  searchQuery: string | undefined
  isInitialFetch: boolean
}

type FlightsDispatchActionPayload = Partial<FlightsState>

// React Redux Best Practice Writing Action Types: domain/action
enum FlightsDispatchActionType {
  fetchingFlights = 'flights/fetchingFlights',
  successFetchingFlights = 'flights/setFlights',
  errorFetchingFlights = 'flights/onError',
}

interface FlightsDispatchAction {
  payload: FlightsDispatchActionPayload
  type: FlightsDispatchActionType
}

interface Props {
  children: React.ReactNode
}

const defaultState = {
  flights: undefined,
  isFetching: false,
  error: undefined,
  searchQuery: undefined,
  isInitialFetch: false
}

const reducer = (state: FlightsState, action: FlightsDispatchAction) => {
  switch (action.type) {
    case FlightsDispatchActionType.fetchingFlights:
      const { isFetching } = action.payload
      return { ...state, isFetching: !!isFetching, isInitialFetch: true }
    case FlightsDispatchActionType.successFetchingFlights:
      const { flights } = action.payload
      return { ...state, flights }
    case FlightsDispatchActionType.errorFetchingFlights:
      const { error } = action.payload
      return { ...state, error }
    default:
      throw new Error()
  }
}

const FlightsContext = createContext<{
  state: FlightsState
  dispatch: Dispatch<FlightsDispatchAction>
}>({
  state: defaultState,
  dispatch: (): void => {},
})

function FlightsContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
  }, [])

  return <FlightsContext.Provider value={{ state, dispatch }}>{children}</FlightsContext.Provider>
}

export default FlightsContextProvider
export { FlightsContext, FlightsDispatchActionType }
export type { FlightsState }
