import { useEffect } from "react"
import { useWeb3 } from "../context/Web3Provider"
import { useNavigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
	const navigate = useNavigate()
	const { isConnected } = useWeb3()

	useEffect(() => {
		if (!isConnected) {
			navigate("/")
		}
	}, [navigate, isConnected])

	return isConnected ? children : null
}
