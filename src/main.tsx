import { createRoot } from "react-dom/client"
import "./index.css"
import { DriverStandings } from "./DriverStandings.tsx"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConstructorStandings } from "./ConstructorStandings.tsx"
import { WelcomePage } from "./WelcomePage.tsx"
import { StandingsNavigation } from "./StandingsNavigation.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<Routes>
				<Route index element={<WelcomePage />} />
				<Route element={<StandingsNavigation />}>
					<Route path="drivers/:year" element={<DriverStandings />} />
					<Route path="constructors/:year" element={<ConstructorStandings />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	</QueryClientProvider>
)
