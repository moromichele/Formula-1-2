import { useEffect, useState } from "react"
import {  Link, useNavigate, useParams } from "react-router"
import { ConstructorStandings } from "./ConstructorStandings"
import { DriverStandings } from "./DriverStandings"

export const StandingsHeader = () => {
	const {year: urlYear, type: urlType} =useParams()
	console.log(urlType)
	const [standingType, setStandingType] = useState(urlType)
	const [year, setYear] = useState(urlYear)
	const navi = useNavigate()
	const currYear = (new Date()).getFullYear()-1

	const years = Array.from(new Array(currYear-1950),( _, index) => currYear-index);
	
	const nextUrl = standingType+'/'+year
	function handleSelectYear(a: React.ChangeEvent<HTMLSelectElement>){
		setYear(a.target.value)
	}

	useEffect(()=>{
		navi(nextUrl)
	},[nextUrl, navi])

	if(urlType !=='constructors' && urlType !=='drivers') { // todo add year validation
			return<div>invalid link, go to home <Link to="">ccc</Link></div>
	}
	
	return (
		<div>
			test title
			<select onChange={handleSelectYear} value={year}>{years.map(y=><option key={y} value={y} >{y}</option>)}</select>
			<button onClick={()=>setStandingType("drivers")}>drivers</button>
			<button onClick={()=>setStandingType("constructors")}>constructors</button>
			{standingType === 'constructors' ? <ConstructorStandings/> : <DriverStandings/>}
		</div>
	)
}
