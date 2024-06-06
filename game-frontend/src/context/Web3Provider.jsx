import { createContext, useCallback, useContext, useState } from "react"
import { ethers } from "ethers"
import { abi } from "../contracts/contracts/footballgame.sol/Web3Football.json"

const web3Countext = createContext()

function Web3Provider({ children }) {
	const [isConnected, setIsConnected] = useState(false)
	const [account, setAccount] = useState({
		accounts: null,
		currentAccount: null,
	})
	const [Contract, setContract] = useState("")
	//problem
	const getContract = useCallback(async () => {
		const provider = new ethers.BrowserProvider(window.ethereum)

		const contractAddress = "0x3530162dc74d89a6d98Fe40f89280FB68CCF4822"
		const signer = await provider.getSigner()
		const contract = new ethers.Contract(contractAddress, abi, signer)

		return contract
	}, [])

	const checkConnection = useCallback(async () => {
		if (!window.ethereum) {
			alert("Please install MetaMask first.")
			return
		}
		const accounts = await window.ethereum.request({ method: "eth_accounts" })
		// console.log(accounts)
		if (accounts.length === 0) {
			return false
		} else {
			return true
		}
	}, [])
	// console.log(Contract)
	return (
		<web3Countext.Provider
			value={{
				Contract,
				setContract,
				getContract,
				isConnected,
				setIsConnected,
				account,
				setAccount,
				checkConnection,
			}}
		>
			{children}
		</web3Countext.Provider>
	)
}

function useWeb3() {
	const context = useContext(web3Countext)
	if (!context) {
		throw new Error("useWeb3 must be used within a Web3Provider")
	}
	return context
}

export { Web3Provider, useWeb3 }
