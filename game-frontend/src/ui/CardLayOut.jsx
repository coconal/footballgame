import { useGetPlayerCards } from "../features/playercards/useGetPlayerCards"
import { useWeb3 } from "../context/Web3Provider"

import Spinner from "./Spinner"

import styled from "styled-components"
import { useEffect } from "react"
import { useGetInactiveCards } from "../features/playercards/useGetInactiveCards"
import Card from "./Card"
import { useNavigate } from "react-router-dom"
import { useGetPlayerActiveGKCard } from "../features/playercards/useGetPlayerActiveGKCard"

const Container = styled.div`
	margin-top: -150px;
`

const Title = styled.h1`
	font-family: "Orbitron", sans-serif;
	letter-spacing: 0.1em;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	background-image: linear-gradient(to left, #a75dc9, #bfa1a1);
	font-weight: bold;
	font-size: 3rem;
	text-align: center;
`

const SubTitle = styled.h1`
	font-family: "Orbitron", sans-serif;
	letter-spacing: 0.1em;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	background-image: linear-gradient(to left, #a75dc9, #bfa1a1);
	font-weight: bold;
	font-size: 1.5rem;
	text-align: center;
`

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	gap: 20px;
	margin-top: 30px;
`

const BackButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	background-color: rgba(255, 255, 255, 0.5);
	border: none;
	color: black;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: rgba(255, 255, 255, 0.8);
	}
`

export default function CardLayOut() {
	const { setIsConnected, setAccount, getContract, setContract, account } = useWeb3()
	const navigate = useNavigate()
	// console.log(account.currentAccount)
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
			// console.log(accounts)
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
	}, [setAccount, getContract, setIsConnected, setContract])
	const { isLoading: isLoading1, playerCards } = useGetPlayerCards({ account })
	const { isLoading: isLoading2, inactiveCards } = useGetInactiveCards({ account })
	const { isLoading: isLoading3, playerActiveGKCard } = useGetPlayerActiveGKCard({ account })

	if (isLoading1 || isLoading2 || isLoading3) return <Spinner />
	const playerCardsArray = playerCards ? Object.values(playerCards) : []
	const playerGKCardArray = playerActiveGKCard ? Object.values(playerActiveGKCard) : []
	console.log(playerGKCardArray)
	const inactiveCardsArray = inactiveCards ? Object.values(inactiveCards) : []
	if (playerCardsArray.length === 0 && inactiveCardsArray === 0) return <Spinner />
	//[id, level]
	return (
		<Container>
			<BackButton
				onClick={() => {
					navigate(-1)
				}}
			>
				Go Back
			</BackButton>
			<Title>Player Cards</Title>
			<SubTitle>Playing VI</SubTitle>
			<GridContainer>
				{playerCardsArray.map((card) => (
					<Card key={`player${card[0]}`} card={card} />
				))}
				{/* {playerGKCardArray.map((card) => (
					<Card key={`keeper${card[0]}`} card={card} isgk={true} iskeeper={true} />
				))} */}
			</GridContainer>

			<SubTitle>Inactive Cards</SubTitle>
			<GridContainer>
				{inactiveCardsArray.map((card) => (
					<Card key={`inactive${card[0]}`} card={card} />
				))}
			</GridContainer>
		</Container>
	)
}
