import { Link } from "react-router"
import css from "./styles.module.css"
export const WelcomePage = () => {
	return (
		<div className={css.wrapper}>
			<p>Welcome to F1 Standings, this website uses data from <Link to='https://github.com/jolpica/jolpica-f1' target="_blank" rel="noopener noreferrer">Jolpica F1 API</Link> to show drivers and
			constructors standings by specific year.</p>
			<p>To start, select what type of standings you're interested in:</p>
			<div className={css.buttonsContainer}>
				<Link to="/drivers/1997" className={css.testButton}>
					drivers
				</Link>
				<Link to="/constructors/1997" className={css.testButton}>
					constructors
				</Link>
			</div>
		</div>
	)
}
