import { createRoot } from "react-dom/client"
import "./index.css"
import { DriverStandings } from "./DriverStandings.tsx"
import { BrowserRouter, Route, Routes } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConstructorStandings } from "./ConstructorStandings.tsx"
import { WelcomePage } from "./WelcomePage.tsx"
import { StandingsHeader } from "./StandingsHeader.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<Routes>
				<Route index element={<WelcomePage />} />
				<Route element={<StandingsHeader />}>
					<Route
						path=":type/:year"
						element={
				
								<DriverStandings />
				
						}
					/>
					<Route
						path=":type/:year"
						element={
						
								<ConstructorStandings />
							
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</QueryClientProvider>
)
