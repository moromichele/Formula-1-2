import { useNavigate, useOutletContext } from "react-router"
import { useEffect } from "react"
import css from "../styles.module.css"
import { getDriversByDriverStandingsData, isInvalidStandings } from "../utils"
import { useDriverStandingsByYearQuery } from "../queries"

export const DriverStandings = () => {
	const { year } = useOutletContext<{ year: string }>()

	const { data: driverStandingsData, isPending: isLoadingDriverStandings } =
		useDriverStandingsByYearQuery(Number(year))
	const navi = useNavigate()

	useEffect(() => {
		navi("/drivers/" + year)
	}, [year, navi])

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
				<div className={css.standingsHeader}>
					<div>Pos</div>
					<div>driver name</div>
					<div># wins</div>
					<div>Pts</div>
				</div>
				{driverStandings.map((ds) => (
					<div className={css.standingsRow} key={ds.Driver.driverId}>
						<div>{ds.position}</div>
						<div className={css.driverNames}>
							<p className={css.ellipsis} >{ds.Driver.givenName}</p>
							<p className={css.ellipsis} >
								<b>{ds.Driver.familyName.toLocaleUpperCase()}</b>
							</p>
						</div>
						<div>{ds.wins}</div>
						<div>{ds.points}</div>
					</div>
				))}
			</div>
		</div>
	)
}
