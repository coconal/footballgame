import { useEffect } from "react"
import { useWeb3 } from "../context/Web3Provider"
import { ethers } from "ethers"

export function useListeningAccount() {
	const { isConnected, setIsConnected, setAccount, getContract, setContract } = useWeb3()

	useEffect(() => {
		if (!window.ethereum) {
			alert("Please install MetaMask first.")
			return
		}
		window.ethereum.on("accountsChanged", handleAccountChanged)
		function handleAccountChanged(accounts) {
			// setAccount({ account: accounts, currentAccount: accounts[0] })
			localStorage.setItem("connectedAccount", [accounts])
		}
		const connectedAccount = localStorage.getItem("connectedAccount")
		const account = connectedAccount ? connectedAccount.split(",") : []
		setAccount({ accounts: account, currentAccount: account[0] })
		setIsConnected(true)
		getContract().then((contract) => setContract(contract))
	}, [setAccount, getContract, setIsConnected, setContract])

	// console.log(Contract)

	function handleConnect() {
		if (isConnected) return
		if (!window.ethereum) {
			alert("Please install MetaMask first.")
			return
		}
		const provider = new ethers.BrowserProvider(window.ethereum)
		provider
			.send("eth_requestAccounts", [])

			.then((accounts) => {
				setIsConnected(true)
				setAccount({ account: accounts, currentAccount: accounts[0] })
				getContract().then((contract) => setContract(contract))
				localStorage.setItem("connectedAccount", [accounts])
			})
	}

	return { handleConnect }
}
