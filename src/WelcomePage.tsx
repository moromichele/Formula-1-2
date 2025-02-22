import { Link } from "react-router"
import css from "./styles.module.css"
export const WelcomePage = () => {
	return (
		<div className={css.wrapper}>
			Welcome to the app, this app uses this API to show drivers and
			constructors standings by specific year.
			<div className={css.buttonsContainer}>
				<Link to="drivers" className={css.testButton}>
					drivers
				</Link>
				<Link to="constructors" className={css.testButton}>
					constructors
				</Link>
			</div>
		</div>
	)
}
