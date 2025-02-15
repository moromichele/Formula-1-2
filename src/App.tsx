import './App.css'
import { useDriverStandingsByYearQuery } from './queries'


function App() {

  const year = 2007

  const {data, isPending} = useDriverStandingsByYearQuery(year)

  if(isPending || !data) return <div>loading data</div>

  return (
      <div> Data fetched, winner in {year} was {data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.code}</div>
  )
}

export default App
