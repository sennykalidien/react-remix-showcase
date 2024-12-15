import type { MetaFunction } from "@remix-run/node";
import { Flights } from "~/components";
import { useFlights } from "~/hooks";
import {useEffect} from "react";

export const meta: MetaFunction = () => [{ title: "Flights | Schiphol Flights App" }];

function FlightsPage() {
  const { initQuery } = useFlights()

  useEffect(() => {
    void initQuery()
  }, []);
  return (
    <div className="container h-screen">
      <section className="section">
        <Flights />
      </section>
    </div>
  )
}

export default FlightsPage
