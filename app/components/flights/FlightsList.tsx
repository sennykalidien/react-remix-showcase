import { FlightItem } from "~/components";
import { useFlights } from "~/hooks";

export function FlightsList() {
  const { flights } = useFlights()

  if(!flights) return <></>

  return (
    <ul>
      {flights.map((flight) => (
        <li className="mb-2 last-of-type:mb-0">
          <article>
            <FlightItem {...flight} />
          </article>
        </li>
      ))}
    </ul>
  )
}

export default FlightsList;
