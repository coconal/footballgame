import { useEffect, useState } from "react"
import { ethers } from "ethers"

export function useConnectAccount() {
	const [isConnected, setIsConnected] = useState(false)
	const provider = new ethers.BrowserProvider(window.ethereum)
	return { provider, isConnected, setIsConnected }
}
