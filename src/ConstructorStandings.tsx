import { useState } from 'react';
import './App.css'
import { useConstructorStandingsByYearQuery } from './queries'
import { getConstructorByConstructorStandingsData } from './utils';


export const ConstructorStandings = () =>  {
  const currYear = (new Date()).getFullYear()-1
  const [year, setYear] = useState(currYear)
  const years = Array.from(new Array(currYear-1950),( _, index) => currYear-index);

  const {data: constructorStandingsData, isPending: isLoadingConstructorStandings} = useConstructorStandingsByYearQuery(year)

  const handleSelectYear = (a: React.ChangeEvent<HTMLSelectElement>) =>{
    setYear(Number(a.target.value))
  }
  if(isLoadingConstructorStandings) return <div>loading data</div>

  console.log(constructorStandingsData)
  return (
    <>
      <select onChange={handleSelectYear} value={year}>{years.map(y=><option key={y} value={y} >{y}</option>)}</select>
      {constructorStandingsData && <div> Data fetched, winner in {year} was {getConstructorByConstructorStandingsData(constructorStandingsData, 0)?.Constructor.name}</div>}
    </>
  )
}