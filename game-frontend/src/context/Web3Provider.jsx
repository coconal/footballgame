import { createContext, useContext, useEffect, useState } from "react"

const web3Countext = createContext()

function Web3Provider({ children }) {
	const [account, setAccount] = useState({
		accounts: null,
		currentAccount: null,
	})

	return <web3Countext.Provider value={{ account, setAccount }}>{children}</web3Countext.Provider>
}

function useWeb3() {
	const context = useContext(web3Countext)
	if (!context) {
		throw new Error("useWeb3 must be used within a Web3Provider")
	}
	return context
}

export { Web3Provider, useWeb3 }
