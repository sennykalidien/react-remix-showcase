import { ChangeEvent, useState } from "react";
import { Select } from "~/components/common";
import { useFlights } from "~/hooks";
import { SortDirection } from "~/types";

function FlightsSortSelect() {
  const { sortFlights } = useFlights()
  const [value, setValue] = useState<SortDirection>(SortDirection.Ascending)

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const direction = event.target.value as SortDirection

    sortFlights(direction)
    setValue(direction)
  }

  return (
    <div className="flex items-center mb-4">
      <label className="mr-2 font-bold">Order</label>
      <Select id="sort-flights" name="sort-flights" defaultValue={value} hasError={false} className="appearance-none p-2" onChange={handleChange}>
        <option value={SortDirection.Ascending}>Ascending</option>
        <option value={SortDirection.Descending}>Descending</option>
      </Select>
    </div>
  )
}

export default FlightsSortSelect;
