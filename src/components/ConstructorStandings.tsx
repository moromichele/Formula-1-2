import { useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router"
import css from "../styles.module.css"
import { useConstructorStandingsByYearQuery } from "../queries"
import {
	getConstructorsByConstructorStandingsData,
	isInvalidStandings,
} from "../utils"

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

	if (isLoadingConstructorStandings)
		return (
			<div>
				<b className={css.gridHeader}>F1 CONSTRUCTOR STANDINGS {year}</b>
				<p style={{ textAlign: "center" }}>loading data...</p>
			</div>
		)

	if (!constructorStandingsData || isInvalidStandings(constructorStandingsData))
		return (
			<div>
				No data for this year, this could mean that you're trying to access a
				season that has not started yet or was not held.
			</div>
		)

	const constructorStandings = getConstructorsByConstructorStandingsData(
		constructorStandingsData
	)

	return (
		<div>
			<div className={css.gridHeader}>F1 CONSTRUCTOR STANDINGS {year}</div>
			<div className={css.standingsGrid}>
				<div className={css.standingsHeader}>
					<div>Pos</div>
					<div>name</div>
					<div># wins</div>
					<div>Pts</div>
				</div>
				{constructorStandings.map((standing) => (
					<div
						className={css.standingsRow}
						key={standing.Constructor.constructorId}
					>
						<div>{standing.position}</div>
						<div>{standing.Constructor.name}</div>
						<div>{standing.wins}</div>
						<div>{standing.points}</div>
					</div>
				))}
			</div>
		</div>
	)
}
