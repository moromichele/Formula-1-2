import { useState } from "react"
import { Link, Outlet, useParams } from "react-router"

function validateYear(year: number): number {
	if (year < 1950 || year > 2040 || isNaN(year)) return 2000
	return year
}

export const StandingsHeader = () => {
	const urlYear = useParams().year as string
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
		<div>
			<select onChange={handleSelectYear} value={year}>
				{years.map((y) => (
					<option key={y} value={y}>
						{y}
					</option>
				))}
			</select>
			<Link to={"drivers" + "/" + year}>drivers</Link>
			<Link to={"constructors" + "/" + year}>constructors</Link>
			<Outlet context={{ year }} />
		</div>
	)
}
