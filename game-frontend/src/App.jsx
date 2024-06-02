import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import MarketPlace from "./pages/MarketPlace"
import Testing from "./pages/Testing"
import PlayerCards from "./pages/PlayerCards"
import PageNotFound from "./pages/PageNotFound"
import GlobalStyles from "./styles/GlobalStyles"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

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
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "var(--color-grey-0)",
						color: "var(--color-grey-700)",
					},
				}}
			/>
		</QueryClientProvider>
	)
}

export default App
