import { useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router"
import css from "./styles.module.css"
import classnames from "classnames"

function validateYear(year: number): number {
	if (year < 1950 || year > 2040 || isNaN(year)) return 2000
	return year
}

export const StandingsNavigation = () => {
	const urlYear = useParams().year as string
	const pathname = useLocation().pathname
	const [year, setYear] = useState(validateYear(Number(urlYear)))
	const currYear = new Date().getFullYear()
	const years = Array.from(
		new Array(currYear - 1949),
		(_, index) => currYear - index
	)

	function handleSelectYear(a: React.ChangeEvent<HTMLSelectElement>) {
		setYear(Number(a.target.value))
	}

	return (
		<>
			<div className={css.standingsNavigation}>
				<select onChange={handleSelectYear} value={year} className={css.yearSelect}>
					{years.map((y) => (
						<option key={y} value={y}>
							{y}
						</option>
					))}
				</select>
				<Link
					to={"drivers" + "/" + year}
					className={classnames(css.standingsTypeLink, {
						[css.activeNav]: pathname.includes("drivers"),
					})}
				>
					drivers
				</Link>
				<Link
					to={"constructors" + "/" + year}
					className={classnames(css.standingsTypeLink, {
						[css.activeNav]: pathname.includes("constructors"),
					})}
				>
					constructors
				</Link>
			</div>
			<Outlet context={{ year }} />
		</>
	)
}
