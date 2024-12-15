import { Flight } from '~/types'

export const getFlightsFromApi = async (): Promise<Flight[]> => {
  try {
    return await fetch('/api/flights')
      .then((res) => res.json())
      .then((resData) => resData.data)
  } catch (error) {
    throw error
  }
}

export const getFlightsFromApiBySearchQuery = async (query: string, limit: number = 5): Promise<Flight[]> => {
  const params = new URLSearchParams({ query, limit: limit.toString() })

  try {
    return await fetch(`/api/flights?${params.toString()}`)
      .then((res) => res.json())
      .then((resData) => resData.data)
  } catch (error) {
    throw error
  }
}
