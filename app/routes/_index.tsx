import type { MetaFunction } from '@remix-run/node'
import { Flights, FlightSearch } from '~/components'
import { useFlights } from '~/hooks'
import clsx from 'clsx'
import { useEffect } from 'react'

export const meta: MetaFunction = () => [{ title: 'Schiphol Flights App' }]

function HomePage() {
  const { isInitialFetch, resetFlights } = useFlights()

  return (
    <div className="container h-screen">
      <section
        className={clsx(
          !isInitialFetch ? 'translate-y-[50%] top-[50%]' : 'translate-y-0 top-0',
          `section transition-transform duration-[1000ms]`,
        )}
      >
        <div className="m-auto w-full">
          <h1
            className={clsx(
              !isInitialFetch ? 'text-5xl sm:text-6xl md:text-7xl' : 'text-4xl',
              `text-schiphol-blue mb-5 transition-all duration-[1000ms]`,
            )}
          >
            <span className="block">Welcome to</span>
            Amsterdam Airport
          </h1>
          <div className="mb-12">
            <FlightSearch initialFocus={true} />
          </div>
        </div>
        <Flights />
      </section>
    </div>
  )
}

export default HomePage
