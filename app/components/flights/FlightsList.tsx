import {Card, CardContent } from "~/components";
import { useFlights } from "~/hooks";
import { Flight } from "~/types";

function FlightsItem({ airport, flightNumber, expectedTime, originalTime }: Flight) {
  return (
    <Card>
      <CardContent className="sm:flex sm:items-center sm:justify-between">
        <div className="mb-5 sm:mb-0">
          <p className="mb-2 sm:mb-2">
            <span className="text-sm block">ETA</span>
            <span className="text-3xl">{expectedTime}</span>
          </p>
          <span className="text-xs block leading-none">Original time: {originalTime}</span>
        </div>
        <div>
          <h2 className="text-xl">{airport}</h2>
          <p>{flightNumber}</p>
        </div>
        <div>
        </div>
      </CardContent>
    </Card>
  )
}

export function FlightsList() {
  const { flights } = useFlights()

  if(!flights) return <></>

  return (
    <ul>
      {flights.map((flight) => (
        <li className="mb-2 last-of-type:mb-0" key={flight.flightIdentifier}>
          <article>
            <FlightsItem {...flight} />
          </article>
        </li>
      ))}
    </ul>
  )
}

export default FlightsList;
