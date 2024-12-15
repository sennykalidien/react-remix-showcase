import { useFlights } from "~/hooks";

function FlightsTotalCount() {
  const { flights, isFetching } = useFlights()

  if(isFetching || !flights || flights.length === 0) return <></>

  return <p className="text-xl">{flights.length} flights found</p>
}

export default FlightsTotalCount;
