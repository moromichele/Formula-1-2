import { useEffect } from "react"
import "./App.css"
import { useConstructorStandingsByYearQuery } from "./queries"
import {
	getConstructorsByConstructorStandingsData,
	isInvalidStandings,
} from "./utils"
import { useNavigate, useOutletContext } from "react-router"
import css from "./styles.module.css"

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

	if (isLoadingConstructorStandings) return <div><b className={css.gridHeader}>F1 CONSTRUCTOR STANDINGS {year}</b><p style={{ textAlign: 'center'}}>loading data...</p></div>

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
			<b className={css.gridHeader}>F1 CONSTRUCTOR STANDINGS {year}</b>
			<div className={css.standingsGrid}>
				<div className={css.standingsRow}>
					<div className={css.position}>Pos</div>
					<div className={css.driverNames}>
						name
					</div>
					<div className={css.nationality}># wins</div>
					<div className={css.points}>Pts</div>
				</div>
				{constructorStandings.map((cs) => (
					<div className={css.standingsRow} key={cs.Constructor.constructorId}>
						<div className={css.position}>{cs.position}</div>
						<div>{cs.Constructor.name}</div>
						<div>{cs.wins}</div>
						<div>{cs.points}</div>
					</div>
				))}
			</div>
		</div>
	)
}
