import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node"
import { flightsData } from "~/data";
import { validateQuery } from "~/utils";
import { Flight } from "~/types";

interface Data {
  flights: Flight[]
}

const filterFlightsData = (flightsData: Data, query: string) => flightsData.flights.filter(f => f.airport.toLowerCase().includes(query.toLowerCase()));

const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query')

  // Custom delay to mimick an external API request and give the UI time to show a loader state
  await delay(1000)

  // if no query has been requested, send full list
  if (!query) return json({ success: true, data: flightsData.flights }, 200)

  // if query isn't valid
  if(!validateQuery(query)) (json({success: false, data: { error: new Error('Please enter more than 3 characters') }}, 200))

  // filter data by query
  const filteredData = filterFlightsData(flightsData, query)
  return json({success: true, data: filteredData}, 200)
}
