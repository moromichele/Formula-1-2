# F1 standings V2

Small project to test how I would approach the same problem from https://github.com/moromichele/F1-Standings some years later and to test Vite as a React project base.

Shows F1 driver or constructor championship standings by year.

Created with Vite React + TypeScript template.

## Differences with V1

### API

The API used in V1 is getting deprecated so this project is using a "direct" replacement, Jolpica API.

### Data fetching: React Query

I'm using React Query for easy data fetching from api with caching functionalities.

### Simpler design

No overy complicated React Redux for state management, simple CSS instead of styled components.