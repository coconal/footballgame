import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useWeb3 } from "../context/Web3Provider"
import { useAvailableCards } from "../features/marketplace/useAvailableCards"
import Spinner from "./Spinner"
import Card from "./Card"
import { useGetPoints } from "../features/home/useGetPoints"
import { useAvailableGKCards } from "../features/marketplace/useAvailableGKCards"

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
	font-size: 1.5rem;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	background-image: linear-gradient(to left, #a75dc9, #bfa1a1);
	font-weight: bold;
	margin: 0 15px;
	text-align: center;
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

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	gap: 20px;
	margin-top: 30px;
`

export default function MarketPlaceLayOut() {
	const navigate = useNavigate()

	const { account, setIsConnected, setAccount, getContract, setContract } = useWeb3()

	const { isLoading: isLoadingCards, availableCards } = useAvailableCards({ account })
	const { isLoading: isLoadingPoints, playerpoints } = useGetPoints({ account })
	const { isLoading: isLoadingGKCards, availableGKCards } = useAvailableGKCards({ account })

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

		// getContract().then((contract) => setContract(contract))
	}, [setAccount, getContract, setIsConnected, setContract])

	if (isLoadingCards || isLoadingPoints || isLoadingGKCards) return <Spinner />
	// console.log(availableCards)
	const availableCardArray = availableCards ? Object.values(availableCards) : []
	const availableGKCardArray = availableGKCards ? Object.values(availableGKCards) : []
	return (
		<Container>
			<BackButton
				onClick={() => {
					navigate(-1)
				}}
			>
				Go Back
			</BackButton>
			<Title>Market Place</Title>
			<FlexContainer>
				<SubTitle>Bronze Card: 50 points</SubTitle>

				<SubTitle>Silver Card: 100 points</SubTitle>

				<SubTitle>Gold Card: 200 points</SubTitle>
			</FlexContainer>
			<GridContainer>
				{availableCardArray.map((card) => (
					<Card key={`player${card[0]}`} card={card} isbuy="true" />
				))}
				{availableGKCardArray.map((card) => (
					<Card key={`keeper${card[0]}`} card={card} isbuy="true" iskeeper="true" />
				))}
			</GridContainer>

			<SubTitle>Your Points: {Number(playerpoints)} </SubTitle>
		</Container>
	)
}
