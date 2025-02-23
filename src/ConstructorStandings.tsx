import './App.css'
import { useConstructorStandingsByYearQuery } from './queries'
import { getConstructorByConstructorStandingsData } from './utils';
import { useParams } from 'react-router';


export const ConstructorStandings = () =>  {
  const year = Number(useParams().year)

  const {data: constructorStandingsData, isPending: isLoadingConstructorStandings} = useConstructorStandingsByYearQuery(year)

  if(isLoadingConstructorStandings) return <div>loading data</div>

  return (
    <>
      {constructorStandingsData && <div> Data fetched, c winner in {year} was {getConstructorByConstructorStandingsData(constructorStandingsData, 0)?.Constructor.name}</div>}
    </>
  )
}