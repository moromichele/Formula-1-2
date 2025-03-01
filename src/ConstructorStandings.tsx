import { useEffect } from "react"
import "./App.css"
import { useConstructorStandingsByYearQuery } from "./queries"
import {
	getConstructorByConstructorStandingsData,
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

	if (isInvalidStandings(constructorStandingsData))
		return (
			<div>
				No data for this year, this could mean that you're trying to access a
				season that has not started yet or was not held.
			</div>
		)

	return (
		<>
			{constructorStandingsData && (
				<div>
					{" "}
					Data fetched, c winner in {year} was{" "}
					{
						getConstructorByConstructorStandingsData(
							constructorStandingsData,
							0
						)?.Constructor.name
					}
				</div>
			)}
		</>
	)
}
