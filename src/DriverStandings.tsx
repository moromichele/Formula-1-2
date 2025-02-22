import { useState } from 'react';
import './App.css'
import { useDriverStandingsByYearQuery } from './queries'
import { getDriverStandingByDriverStandingsData } from './utils';


export const DriverStandings = () =>  {
  const currYear = (new Date()).getFullYear()-1
  const [year, setYear] = useState(currYear)
  const years = Array.from(new Array(currYear-1950),( _, index) => currYear-index);

  const {data: driverStandingsData, isPending: isLoadingDriverStandings} = useDriverStandingsByYearQuery(year)

  const handleSelectYear = (a: React.ChangeEvent<HTMLSelectElement>) =>{
    setYear(Number(a.target.value))
  }
  if(isLoadingDriverStandings) return <div>loading data</div>

  return (
    <>
      <select onChange={handleSelectYear} value={year}>{years.map(y=><option key={y} value={y} >{y}</option>)}</select>
      {driverStandingsData && <div> Data fetched, winner in {year} was {getDriverStandingByDriverStandingsData(driverStandingsData, 0)?.Driver.driverId}</div>}
    </>
  )
}