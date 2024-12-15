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
 * Mimic REST API
 * - request param query: filter data based on requested query
 * - request param limit: limit data to requested limit
 * @param request
 */
export async function loader({ request }: LoaderFunctionArgs) {
  const data = flightsData.flights as Flight[]
  const url = new URL(request.url)
  const query = url.searchParams.get('query')
  const limit = Number(url.searchParams.get('limit')) || defaultLimit

  // Custom delay to mimic an external API request and give the UI time to show a loader state
  await delay(1000)

  // if no query has been requested, send full list
  if (!query) {
    return json({ success: true, data }, 200)
  }

  // if query isn't valid
  if (!validateQuery(query))
    json({ success: false, data: { error: new Error('Please enter more than 3 characters') } }, 200)

  // filter data by query
  const filteredData = filterFlights(data, query)

  // Limit data based on limit param
  filteredData.slice(0, limit)
  return json({ success: true, data: filteredData }, 200)
}
