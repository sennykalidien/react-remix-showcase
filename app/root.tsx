import { ReactNode } from 'react'
import type { LinksFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, NavLink } from '@remix-run/react'
import { AppBar, Logo, Nav, NavItem} from "~/components";
import fontsStylesheet from './styles/fonts.css?url'
import colorsStylesheet from './styles/colors.css?url'
import mainStylesheet from './styles/main.css?url'
import tailwindStylesheet from './styles/tailwind.css?url'
import { FlightsContextProvider } from "~/context";

export const links: LinksFunction = () => [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/NeueFrutigerWorld-Regular.ttf', // TODO: Convert to woff2
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/NeueFrutigerWorld-Bold.ttf', // TODO: Convert to woff2
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    { rel: 'stylesheet', href: fontsStylesheet },
    { rel: 'stylesheet', href: colorsStylesheet },
    { rel: 'stylesheet', href: mainStylesheet },
    { rel: 'stylesheet', href: tailwindStylesheet }
]

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
          <header>
            <AppBar>
              <div className="container mx-auto py-2 flex items-center justify-between">
                <NavLink to="/">
                  <Logo className="m-auto md:m-0 w-32" />
                </NavLink>
                <Nav>
                  <NavItem>
                    <NavLink to="/flights" className="link">All Flights</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </AppBar>
          </header>
          <main>
            <FlightsContextProvider>
              {children}
            </FlightsContextProvider>
          </main>
          <footer></footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
