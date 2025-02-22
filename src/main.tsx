import { createRoot } from "react-dom/client"
import "./index.css"
import { DriverStandings } from "./DriverStandings.tsx"
import { BrowserRouter, Route, Routes } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppWrapper } from "./AppWrapper.tsx"
import { ConstructorStandings } from "./ConstructorStandings.tsx"
import { WelcomePage } from "./WelcomePage.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<Routes>
				<Route index element={<WelcomePage />} />
				<Route element={<AppWrapper />}>
					<Route path="drivers" element={<DriverStandings />} />
					<Route path="constructors" element={<ConstructorStandings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</QueryClientProvider>
)
