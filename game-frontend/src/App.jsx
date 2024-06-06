import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

import Home from "./pages/Home"
import MarketPlace from "./pages/MarketPlace"
import Testing from "./pages/Testing"
import PlayerCards from "./pages/PlayerCards"
import PageNotFound from "./pages/PageNotFound"
import GlobalStyles from "./styles/GlobalStyles"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./pages/ProtectedRoute"

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route
						path="/MarketPlace"
						element={
							<ProtectedRoute>
								<MarketPlace />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/game"
						element={
							<ProtectedRoute>
								<Testing />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/Carts"
						element={
							<ProtectedRoute>
								<PlayerCards />
							</ProtectedRoute>
						}
					/>

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
