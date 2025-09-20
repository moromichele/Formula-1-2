import { useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router"
import css from "../styles.module.css"
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
		<div className={css.standingsWrapper}>
			<div className={css.standingsNavigation}>
				<select
					onChange={handleSelectYear}
					value={year}
					className={css.yearSelect}
				>
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
				<Link to={"/"}>
					<div className={css.iconContainer}>
						<svg
							className={css.icon}
							viewBox="0 0 30 30"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							width="30"
							height="30"
						>
							<path d="m15 2a1 1 0 0 0-0.69922 0.28516l-10.908 8.9219a1 1 0 0 0-0.037109 0.029297l-0.037109 0.03125v0.001953a1 1 0 0 0-0.31836 0.73047 1 1 0 0 0 1 1h1v11c0 1.105 0.895 2 2 2h16c1.105 0 2-0.895 2-2v-11h1a1 1 0 0 0 1-1 1 1 0 0 0-0.31836-0.73242l-0.015625-0.011719a1 1 0 0 0-0.06836-0.05664l-1.5977-1.3066v-3.8926c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1v1.4395l-6.3223-5.1719a1 1 0 0 0-0.67773-0.26758zm3 13h4v8h-4v-8z" />
						</svg>
					</div>
				</Link>
			</div>
			<Outlet context={{ year }} />
		</div>
	)
}
