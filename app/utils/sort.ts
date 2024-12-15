import {Flight, SortDirection} from "~/types";

/**
 * This gets converted to timestamp format
 * @param time
 */
function convertTimeToTimestamp(time: string) {
  const [hours, minutes] = time.split(':').map(Number); // only get numbers

  return new Date().setHours(hours, minutes); // returns timestamp
}

export function sortFlightsByTime(flights: Flight[], direction: SortDirection) {
  const compareTimes = (flightA: Flight, flightB: Flight) => {
    // expectedTime is in (HH:MM) string, we need to convert it to timestamp so we can compare times
    const dateA = convertTimeToTimestamp(flightA.expectedTime);
    const dateB = convertTimeToTimestamp(flightB.expectedTime);

    return dateA - dateB; // Direct numerical comparison
  };

  const sortedFlights = [...flights].sort(compareTimes);

  return direction === SortDirection.Descending ? sortedFlights.reverse() : sortedFlights;
}
