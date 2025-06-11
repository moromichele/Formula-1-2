import { Link } from "react-router"
import css from "../styles.module.css"

export const WelcomePage = () => {
	return (
		<div className={css.welcomeWrapper}>
			<div className={css.welcomeContent}>
				<div className={css.title}>F1 Standings - V2</div>
				<div>
					Welcome to F1 Standings, this website uses data from{" "}
					<Link
						to="https://github.com/jolpica/jolpica-f1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jolpica F1 API
					</Link>{" "}
					to display drivers and constructors standings by specific year.
				</div>
				<div>To start, select what type of standings you're interested in:</div>
				<div className={css.buttonsContainer}>
					<Link to="/drivers/2007" className={css.navButton}>
						DRIVERS
					</Link>
					<Link to="/constructors/2004" className={css.navButton}>
						CONSTRUCTORS
					</Link>
				</div>
			</div>
		</div>
	)
}
