import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Pages/Home"
import MarketPlace from "./Pages/MarketPlace"
import Testing from "./Pages/Testing"
import PlayerCards from "./Pages/PlayerCards"

import GlobalStyles from "./styles/GlobalStyles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/MarketPlace" element={<MarketPlace />} />
					<Route path="game" element={<Testing />} />
					<Route path="Carts" element={<PlayerCards />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
