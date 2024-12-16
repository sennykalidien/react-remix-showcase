import type { LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { flightsData } from '~/data'
import { validateQuery } from '~/utils'
import { Flight } from '~/types'

const defaultLimit = 14 // count of all items in flightsData (flights.json)

const filterFlights = (data: Flight[], query: string) =>
  flightsData.flights.filter((f) => f.airport.toLowerCase().includes(query.toLowerCase()))

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * REST API route
 * - request param query: filter data based on requested query
 * - request param limit: limit data to requested limit
 * @param request
 */
export async function loader({ request }: LoaderFunctionArgs) {
  const data = flightsData.flights as Flight[]
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  const limit = Number(url.searchParams.get('limit')) || defaultLimit

  // Mimics an external API request and give the UI time to show a loader state
  await delay(1000)

  /*
      Conditionally return data
      Handle different types of requests based on supplied parameters
      Ordered to improve performance
   */
  switch (true) {
    // Start with the easiest request and less load
    case !query:
      return json({ success: true, data }, 200)
    // In case a query was passed (not undefined)
    case query && validateQuery(query):
      const filteredData = filterFlights(data, query)
      filteredData.slice(0, limit)
      return json({ success: true, data: filteredData }, 200)
    // In case query is not valid
    case !validateQuery(query):
      return json({ success: false, data: { error: new Error('Please enter more than 3 characters') } }, 200)
    default:
      return json({ success: false, data: { error: new Error('Not a valid request') } }, 200)
  }
}
