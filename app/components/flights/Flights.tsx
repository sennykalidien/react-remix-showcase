import {FlightList, FlightsSorter, FlightsTotalCount, Loader} from "~/components";
import {useFlights} from "~/hooks";

function Flights() {
  const { flights, isFetching, error } = useFlights()

  if(isFetching) return <Loader className="m-auto">Getting Flights...</Loader>
  if(error) return <>{error.message}</>
  if(Array.isArray(flights) && flights?.length === 0) return <>We didn't find any flights matching your criteria. Please try again</>
  if(!flights) return <></>

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <FlightsTotalCount />
        <FlightsSorter />
      </div>
      <FlightList />
    </>
  )
}

export default Flights
