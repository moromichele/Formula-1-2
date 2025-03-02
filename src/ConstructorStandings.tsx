import { useEffect } from "react"
import "./App.css"
import { useConstructorStandingsByYearQuery } from "./queries"
import {
	getConstructorsByConstructorStandingsData,
	isInvalidStandings,
} from "./utils"
import { useNavigate, useOutletContext } from "react-router"

export const ConstructorStandings = () => {
	const { year } = useOutletContext<{ year: string }>()

	const {
		data: constructorStandingsData,
		isPending: isLoadingConstructorStandings,
	} = useConstructorStandingsByYearQuery(Number(year))

	const navi = useNavigate()

	useEffect(() => {
		navi("/constructors/" + year)
	}, [year, navi])

	if (isLoadingConstructorStandings) return <div>loading data</div>

	if (!constructorStandingsData || isInvalidStandings(constructorStandingsData))
		return (
			<div>
				No data for this year, this could mean that you're trying to access a
				season that has not started yet or was not held.
			</div>
		)

	const constructors = getConstructorsByConstructorStandingsData(constructorStandingsData)

	return (
		<div>
			Data fetched, c standings in {year}:
			{constructors.map((constructor)=><div>{constructor.Constructor.name}</div>)}
		</div>
	)
}
