import './App.css'
import { useStandingsByYearQuery } from './queries'

function App() {

  const {data, isPending} = useStandingsByYearQuery()

  if(isPending || !data) return <div>loading data</div>

  return (
    <>
      <div>{data.year} Championship</div>
      <div>First place: {data[1]}</div>
      <div>Second place: {data[2]}</div>
    </>
  )
}

export default App
