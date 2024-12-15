# React x Remix x TailwindCSS Showcase

# Index
- [Intro](#Intro)
- [Approach](#Approach)
  - [Assessment](#Assessment)
  - [Assembly](#Assembly)
  - [Action](#Action)
- [Last words](#LastWords)
- [Installation](#Installation)

# Intro
This is based on the code assesment I had to do for Schiphol. 

[Schiphol Assignment](/docs/assignment.md)

# Approach
## Planning
| Task                                      | Time     |
|-------------------------------------------|----------|
| Research                                  | 0:30     |
| Concepting                        | 0:45     |
| Documentation (ongoing)                   | 0:45     |
| Setup codebase                            | 0:30     |
| Create UI Components                      | 1:00     |
| Create Functionality (hooks, utils, state) | 1:30     |
| Add a e2e test                            | 0:30     |
| __Total Time__                            | __4:00__ |

## The Triple A Rule (Cyberpunk 2077)
While I was playing Cyberpunk 2077, I had to assist _Panam Palmer_ on her path to revenge. During the drive to the location, she explained how she formulated her well thought devious plan. She called it the Triple A Rule: Assessment, Assembly, Action.

- [Original footage](https://www.youtube.com/watch?v=S2ULRDZ3iIs)
- [Panam's Triple A Rule: Assessment, Assembly, Action - by Ismail Taleb](https://ismailtaleb.substack.com/p/panams-triple-a-rule-assessment-assembly)

I thought it would be nice to use the same approach for this assessment :-)

## Assessment
> This first step involves gathering information, understanding the problem at hand, and knowing what resources you have available.

### Requirements from the assignment
- Spend no more than 4 hours, unless I want to show off
- Use React & Typescript as the tech stack
- Serve flights.json with REST API and load this asynchronously using XHR or Fetch API
- Sort flight results by __expected__ time
- Limit the search result to a maximum of 5 flights
- Make it nice
- Add tests

#### Extra's
- Try to use more of Schiphol's main tech stack: Remix, TailwindCSS, Design Tokens (Style Dictionary)

## Resources
- Remix documentation
- Tailwind documentation

## The Challenges
- Remix: I've never worked with Remix before, but I would like to use it as I would need to set up and mimick an API call.
  - Do research as it will be needed if I would get hired for the project I'm applying for.

## Technical Requirements
- Make search the focus of the app
- Make flights the focus after results have been found
- Search debounce


# Assembly
> After understanding the situation, I gather the resources needed to tackle the problem. - Ismail Taleb

Resources
- [Remix Documentation]()
- [TailwindCSS Example]()


## Action
> Once you've assessed the situation and assembled your resources, it's time to act. You execute your plan to solve the problem or achieve your goal. This principle emphasizes the importance of taking decisive action based on thoughtful preparation.

### Wait there is more... Improvisation
> While not formally part of the Triple A, Panam mentions the necessity of improvising when things don't go as planned. This encourages flexibility and adaptability, important skills in any aspect of life. It's a reminder that even the best-laid plans can encounter obstacles and that we must be prepared to adjust and adapt when needed.


# Last Words

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
