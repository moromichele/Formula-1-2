import { useNavigate, useOutletContext } from "react-router"
import "./App.css"
import { useDriverStandingsByYearQuery } from "./queries"
import { getDriversByDriverStandingsData, isInvalidStandings } from "./utils"
import { useEffect } from "react"
import css from "./styles.module.css"

export const DriverStandings = () => {
	const { year } = useOutletContext<{ year: string }>()

	const { data: driverStandingsData, isPending: isLoadingDriverStandings } =
		useDriverStandingsByYearQuery(Number(year))
	const navi = useNavigate()

	useEffect(() => {
		navi("/drivers/" + year)
	}, [year, navi])

	console.log(year)
	if (isLoadingDriverStandings)
		return (
			<div>
				<b className={css.gridHeader}>F1 DRIVER STANDINGS {year}</b>
				<p style={{ textAlign: "center" }}>loading data...</p>
			</div>
		)

	if (!driverStandingsData || isInvalidStandings(driverStandingsData))
		return (
			<div>
				No data for this year, this could mean that you're trying to access a
				season that has not started yet or was not held.
			</div>
		)

	const driverStandings = getDriversByDriverStandingsData(driverStandingsData)

	return (
		<div>
			<div className={css.gridHeader}>F1 DRIVER STANDINGS {year}</div>
			<div className={css.standingsGrid}>
				<div className={css.standingsRow}>
					<div className={css.position}>Pos</div>
					<div>driver name</div>
					<div className={css.nationality}># wins</div>
					<div className={css.points}>Pts</div>
				</div>
				{driverStandings.map((ds) => (
					<div className={css.standingsRow} key={ds.Driver.driverId}>
						<div className={css.position}>{ds.position}</div>
						<div className={css.driverNames}>
							<p>{ds.Driver.givenName}</p>
							<p>
								<b>{ds.Driver.familyName.toLocaleUpperCase()}</b>
							</p>
						</div>
						<div className={css.nationality}>{ds.wins}</div>
						<div className={css.points}>{ds.points}</div>
					</div>
				))}
			</div>
		</div>
	)
}
