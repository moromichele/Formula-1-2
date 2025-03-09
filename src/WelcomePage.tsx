import { Link } from "react-router"
import css from "./styles.module.css"
export const WelcomePage = () => {
	return (
		<div className={css.welcomeWrapper}>
			<p>Welcome to F1 Standings, this website uses data from <Link to='https://github.com/jolpica/jolpica-f1' target="_blank" rel="noopener noreferrer">Jolpica F1 API</Link> to show drivers and
			constructors standings by specific year.</p>
			<p>To start, select what type of standings you're interested in:</p>
			<div className={css.buttonsContainer}>
				<Link to="/drivers/2007" className={css.navButton}>
					drivers
				</Link>
				<Link to="/constructors/2004" className={css.navButton}>
					constructors
				</Link>
			</div>
		</div>
	)
}
