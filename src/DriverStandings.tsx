import { useNavigate, useOutletContext } from "react-router"
import "./App.css"
import { useDriverStandingsByYearQuery } from "./queries"
import {
	getDriverStandingByDriverStandingsData,
	isInvalidStandings,
} from "./utils"
import { useEffect } from "react"

export const DriverStandings = () => {
	const { year } = useOutletContext<{ year: string }>()

	const { data: driverStandingsData, isPending: isLoadingDriverStandings } =
		useDriverStandingsByYearQuery(Number(year))
	const navi = useNavigate()

	useEffect(() => {
		navi("/drivers/" + year)
	}, [year, navi])

	console.log(year)
	if (isLoadingDriverStandings) return <div>loading data</div>

	if (isInvalidStandings(driverStandingsData))
		return (
			<div>
				No data for this year, this could mean that you're trying to access a
				season that has not started yet or was not held.
			</div>
		)

	return (
		<>
			{driverStandingsData && (
				<div>
					{" "}
					Data fetched, d winner in {year} was{" "}
					{
						getDriverStandingByDriverStandingsData(driverStandingsData, 0)
							?.Driver.driverId
					}
				</div>
			)}
		</>
	)
}
