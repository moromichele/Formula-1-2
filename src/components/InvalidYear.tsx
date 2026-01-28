import css from "../styles.module.css"

export const InvalidYear = () => (
	<div className={css.emptyState}>
		<p className={css.emptyStateTitle}>No data for this year</p>
		<p>
			This could mean that you're trying to access a season that has not started
			yet or was not held.
		</p>
		<p>
			F1 has been running continuously every year since 1950, the new season
			usually starts in March.
		</p>
		<a
			href="https://en.wikipedia.org/wiki/List_of_Formula_One_seasons"
			target="_blank"
		>
			List of F1 Seasons (Wikipedia)
		</a>
	</div>
)
