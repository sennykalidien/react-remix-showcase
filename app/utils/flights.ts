import { Flight, SortDirection } from '~/types'

/**
 * This gets converted to timestamp format
 * @param time - HH:MM
 * @returns string - timestamp
 */
function convertTimeToTimestamp(time: string) {
  const [hours, minutes] = time.split(':').map(Number) // only get numbers

  return new Date().setHours(hours, minutes) // returns timestamp
}

const compareTimestamps = (flightA: Flight, flightB: Flight) => {
  // expectedTime is in (HH:MM) string, we need to convert it to timestamp so we can compare times
  const dateA = convertTimeToTimestamp(flightA.expectedTime)
  const dateB = convertTimeToTimestamp(flightB.expectedTime)

  return dateA - dateB // Direct numerical comparison
}

export function sortFlightsByTime(flights: Flight[], direction: SortDirection) {
  return direction === SortDirection.Descending
    ? flights.sort(compareTimestamps).reverse()
    : flights.sort(compareTimestamps)
}
