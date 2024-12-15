import { Card, CardContent } from "~/components/common";
import { Flight } from "~/types";

export function FlightsItem({ airport, flightNumber, expectedTime, originalTime }: Flight) {
  return (
    <Card>
      <CardContent className="sm:flex sm:items-center sm:justify-between">
        <div className="mb-5 sm:mb-0">
          <p className="mb-2 sm:mb-2">
            <span className="text-sm block">Expected</span>
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

export default FlightsItem;
