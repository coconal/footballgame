import { useNavigate } from "react-router-dom"

import HomeHeader from "./HomeHeader"
import styled from "styled-components"
import title from "../assets/title.png"
import Image from "./Image"
import Button from "./Button"

import Spinner from "./Spinner"
import { useWeb3 } from "../context/Web3Provider"
import { useGetJoinStatus } from "../features/home/useGetJoinStatus"
import { useSignUp } from "../features/home/useSignUp"
import { useGetPoints } from "../features/home/useGetPoints"
import { useEffect } from "react"
import { ethers } from "ethers"

const StyledAppLayout = styled.div`
	padding: 0.8rem 0;
`
const Container = styled.div`
	margin-left: 1.5rem; // ml-6
	height: 260px; // h-[260px]
	display: flex; // flex
	flex-direction: column; // flex-col
	justify-content: flex-end; // justify-end
	padding-bottom: 1rem;
`

const CenteredContainer = styled.div`
	font-family: "Orbitron", sans-serif; // font-Orbitron
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	position: relative; // 添加这一行，设置定位方式为相对定位
	top: 3rem;
`
const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
`

export default function HomeLayOut() {
	const {
		isConnected,
		account,
		setIsConnected,
		setAccount,
		setContract,
		getContract,
		Contract,
		checkConnection,
	} = useWeb3()
	const { isLoading: isLoadingJoin, joinStatus } = useGetJoinStatus({ account })
	const { isLoading: isLoadingSignUp, signUp } = useSignUp({ Contract })
	const { isLoading: isLoadingPoints, playerpoints } = useGetPoints({ account })
	// console.log(Contract)

	const navagate = useNavigate()
	useEffect(() => {
		const connectedAccount = localStorage.getItem("connectedAccount")
		const newaccounts = connectedAccount ? connectedAccount.split(",") : []
		if (account.currentAccount === newaccounts[0]) {
			return
		}
		setIsConnected(true)
		setAccount({ account: newaccounts, currentAccount: newaccounts[0] })
		getContract().then((contract) => setContract(contract))
	}, [])

	useEffect(() => {
		if (!window.ethereum) {
			alert("Please install MetaMask first.")
			return
		}

		window.ethereum.on("accountsChanged", handleAccountChanged)
		function handleAccountChanged(accounts) {
			console.log(accounts)
			if (!accounts) {
				setIsConnected(false)
				return
			} else {
				setAccount({ account: accounts, currentAccount: accounts[0] })
				setIsConnected(true)
				localStorage.setItem("connectedAccount", [accounts])
			}
			getContract().then((contract) => setContract(contract))
		}
	}, [setAccount, getContract, setIsConnected, setContract, checkConnection])

	if (isConnected) {
		if (isLoadingJoin || isLoadingSignUp || isLoadingPoints) {
			return <Spinner />
		}
	}
	function handleJoin() {
		if (!isConnected) {
			return
		}
		if (isConnected && !joinStatus) {
			const receipt = signUp()
			console.log(receipt)
		}
		if (joinStatus && isConnected) {
			navagate("/game")
		}
	}

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

	return (
		<>
			<StyledAppLayout>
				<HomeHeader
					playerpoints={Number(playerpoints)}
					handleConnect={handleConnect}
					isConnected={isConnected}
					account={account}
				/>
			</StyledAppLayout>
			<Container>
				<ImageContainer>
					<Image src={title} width="1000px" height="200px" />
				</ImageContainer>

				<CenteredContainer>
					<Button
						variation="joinBt"
						size="medium"
						onClick={handleJoin}
						disabled={!isConnected && !joinStatus}
					>
						{isConnected && joinStatus && "Play"}
						{isConnected && !joinStatus && "Join"}
						{!isConnected && "Please Connect Wallet"}
					</Button>
				</CenteredContainer>
			</Container>
		</>
	)
}
