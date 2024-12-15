# React x Remix x TailwindCSS Showcase

# Index
- [Intro](#Intro)
- [Approach](#Approach)
  - [Assessment](#Assessment)
  - [Assembly](#Assembly)
  - [Action](#Action)
- [Last Words](#Last-Words)
- [Installation](#Installation)

# Intro
This is based on the code assignment I had to do for Schiphol. 

[Schiphol Assignment](/docs/assignment.md)

# Approach
While I was playing Cyberpunk 2077, I had to assist _Panam Palmer_ on her path to revenge. During the conversation in the car while driving to the location, she explained how she formulated her well thought devious plan.

__She called it the Triple A Rule: Assessment, Assembly, Action.__

- [Original footage](https://www.youtube.com/watch?v=S2ULRDZ3iIs)
- [Panam's Triple A Rule: Assessment, Assembly, Action - by Ismail Taleb](https://ismailtaleb.substack.com/p/panams-triple-a-rule-assessment-assembly)

I thought it would be nice to use the same approach for this assessment 😄

## Assessment
> This first step involves gathering information, understanding the problem at hand, and knowing what resources you have available. - by Ismail Taleb

### Requirements from the assignment
- Use React & Typescript as the tech stack
- Serve flights.json with REST API and load this asynchronously using XHR or Fetch API
- Sort flight results by __expected__ time
- Limit the search result to a maximum of 5 flights
- Make it nice
- Add unit tests and maybe also an e2e test

#### Extra's
- Schiphols internal tech stack: Remix, TailwindCSS, Design Systems, Design Tokens (Style Dictionary)

## Resources
- Remix documentation
- Tailwind documentation

## Challenges
- Remix: I've never worked with Remix before, but I would like to use it as I would need to set up and mimick an API call.
  - Do research as it will be needed if I would get hired for the project I'm applying for.


# Assembly
> After understanding the situation, I gather the resources needed to tackle the problem. - Ismail Taleb

## Gathered Resources
- [React Router Docs](https://reactrouter.com/home)
- [Remix Docs](https://remix.run/docs/en/main)
- [TailwindCSS Example](https://github.com/remix-run/examples/tree/main/tailwindcss)


## Action
> Once you've assessed the situation and assembled your resources, it's time to act. You execute your plan to solve the problem or achieve your goal. 
This principle emphasizes the importance of taking decisive action based on thoughtful preparation. - by Ismail Taleb

### Execution
Important files:

__REST API__ 
`/app/routes/api.flights.tsx`: contains API on remix server for serving the flights.json as a http request

__Pages__
- `/app/routes/api.flights.tsx`: contains API on remix server for serving the flights.json as a http request. Returns data based on query
- `/app/routes/_index.tsx`: homepage with search to query specific flights by destination
- `/app/routes/flights.tsx`: flights page that queries and displays __all flights__

__Components__
- `/app/components/common`: contains 'dumb', presentation components without any logic or knowledge about the domain (flights)
- `/app/components/flights`: contains logical compound components that makes use of the FlightContext.

__Hooks__
- `/app/components/hooks/useDebounce`: simple logic to use a delay before returning the value with `setTimeout`
- `/app/components/hooks/useFlights`: consumes FlightsContext and returns state + functions to get and handle flights data.

### Wait there is more... Improvisation
> While not formally part of the Triple A, Panam mentions the necessity of improvising when things don't go as planned. 
  This encourages flexibility and adaptability, important skills in any aspect of life. 
  It's a reminder that even the best-laid plans can encounter obstacles and that we must be prepared to adjust and adapt when needed. - by Ismail Taleb

- 

# Last Words
Unfortunately I didn't have enough time to:
- add proper __tests__.
- solve the bug when switching page and showing old flights results. This is because the FlightContext is wrapped around all routes...
- No accessibility or performance optimalisation added.
---

# Installation
Used example from [remix-run/examples/tailwindcss](https://github.com/remix-run/examples/blob/main/tailwindcss)

Requirements
- Node `>= 20.0.0`
- PNPM `9.15.0`


1. Install project
```
pnpm install
```

2. Run project locally
```
pnpm dev
```
