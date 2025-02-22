import { Link, Outlet } from "react-router"

export const AppWrapper = () => {
	return (
		<div>
			test title
			<Link to="drivers">drivers</Link>
			<Link to="constructors">constructors</Link>
			<Outlet />
		</div>
	)
}
