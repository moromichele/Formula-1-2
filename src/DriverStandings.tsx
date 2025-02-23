import { useParams } from 'react-router';
import './App.css'
import { useDriverStandingsByYearQuery } from './queries'
import { getDriverStandingByDriverStandingsData } from './utils';


export const DriverStandings = () =>  {
  const year = Number(useParams().year)

  const {data: driverStandingsData, isPending: isLoadingDriverStandings} = useDriverStandingsByYearQuery(year)


  if(isLoadingDriverStandings) return <div>loading data</div>

  return (
    <>
      {driverStandingsData && <div> Data fetched, d winner in {year} was {getDriverStandingByDriverStandingsData(driverStandingsData, 0)?.Driver.driverId}</div>}
    </>
  )
}