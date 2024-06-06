import p0 from "../assets/players/0.png"
import p4 from "../assets/players/4.png"
import p6 from "../assets/players/6.png"
import p8 from "../assets/players/8.png"
import p10 from "../assets/players/10.png"

import p1 from "../assets/players/1.png"
import p3 from "../assets/players/3.png"
import p5 from "../assets/players/5.png"
import p7 from "../assets/players/7.png"
import p9 from "../assets/players/9.png"

import { useWeb3 } from "../context/Web3Provider"
import styled from "styled-components"
import ScoreComponent from "./ScoreComponent"
import GameOpeningComponent from "./GameOpeningComponent"
import { useGetInterface } from "../features/testing/useInterface"
import Spinner from "./Spinner"
import { useState } from "react"
import InterfaceComponent from "./InterfaceComponent"
import { getInterface, penaltyShoot } from "../services/abiRead"
import ResultComponent from "./ResultComponent"
import GoalSaved from "./GoalSaved"
import GoalScored from "./GoalScored"
import Deposited from "./Deposited"

const StyledDiv = styled.div`
	width: 400px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 8px;
	background: rgba(0, 0, 0, 0.5);
	padding: 4px;
`
const StyledH1 = styled.h1`
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	background-image: linear-gradient(to left, blue, red);
	font-weight: bold;
	margin-bottom: 4px;
`

const StyledDivImg = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1px;
`

const StyledImg = styled.img`
	width: 75px;
`

const StyledDCerten = styled.div`
	width: 800px;
	height: 400px;
	border: 8px solid;
	border-image: linear-gradient(to left, blue, red) 1;
	border-radius: 1rem;
`

const StyledDivScore = styled.div`
	display: flex;
	justify-content: center;
`
const initialValue = 0

export default function GameComponent({ currentPlayerState, setCurrentPlayerState }) {
	const { account, Contract } = useWeb3()
	const [interfaceState, setInterfaceState] = useState(false)
	const [interFace, setInterFace] = useState({ value: initialValue })
	const [shootNumber, setShootNumber] = useState(0)
	const [gameOpeningState, setGameOpeningState] = useState(true)
	const [computerScore, setComputerScore] = useState(0)
	const [computerScoreRecord, setComputerScoreRecord] = useState([])
	const [goalScoredState, setGoalScoredState] = useState(false)
	const [goalSavedState, setGoalSavedState] = useState(false)
	const [playerScoreRecord, setPlayerScoreRecord] = useState([])
	const [playerScore, setPlayerScore] = useState(0)
	const [resultState, setResultState] = useState(false)
	const [result, setResult] = useState({ value: initialValue })
	const [isDepositing, setIsDepositing] = useState(false)

	//const { isLoading: isLoadingInterface, getinterfacedata } = useGetInterface()

	const { interfacedata, isLoading, error } = useGetInterface({
		account,
		shootNumber,
		currentPlayerState,
	})

	if (isLoading) {
		return <Spinner />
	}

	function onClickLetsPlay() {
		// const t = await getInterface(account, shootNumber, currentPlayerState)
		// console.log(t)
		setGameOpeningState(false)
		// console.log(interfacedata)
		if (!error && !isLoading && interfacedata) {
			setInterFace({ value: Number(interfacedata) })
			setInterfaceState(true)
		}
	}

	async function onClickShoot(option) {
		setInterfaceState(false)
		const data = await penaltyShoot(interFace.value, option, shootNumber)
		console.log(currentPlayerState, data)
		if (currentPlayerState === 1 && !data) {
			setComputerScore(computerScore + 1)
			setComputerScoreRecord((computerScoreRecord) => [...computerScoreRecord, 1])
			setGoalScoredState(true)
		} else if (currentPlayerState === 1 && data) {
			setComputerScoreRecord((computerScoreRecord) => [...computerScoreRecord, 0])
			setGoalSavedState(true)
		} else if (currentPlayerState === 2 && data) {
			setPlayerScore(playerScore + 1)
			setPlayerScoreRecord((playerScoreRecord) => [...playerScoreRecord, 1])
			setGoalScoredState(true)
		} else if (currentPlayerState === 2 && !data) {
			setPlayerScoreRecord((playerScoreRecord) => [...playerScoreRecord, 0])
			setGoalSavedState(true)
		}
		console.log("shoot number", shootNumber, interFace.value)

		if (currentPlayerState === 1) {
			setCurrentPlayerState(2)
		} else {
			setCurrentPlayerState(1)
		}
		const tempShootNumber = shootNumber + 1

		const t = await getInterface(account, tempShootNumber, currentPlayerState)
		// console.log(interFace.value)
		setInterFace({ value: Number(t) })
		setShootNumber(shootNumber + 1)
	}

	return (
		<div style={{ display: "flex" }}>
			<StyledDiv>
				<StyledH1>Your Cards</StyledH1>
				<StyledDivImg>
					<StyledImg src={p0} />
					<StyledImg src={p8} />
					<StyledImg src={p10} />
					<StyledImg src={p4} />
					<StyledImg src={p6} />
				</StyledDivImg>
			</StyledDiv>
			<div>
				<StyledDCerten>
					{gameOpeningState && <GameOpeningComponent onClickLetsPlay={onClickLetsPlay} />}
					{interfaceState && (
						<InterfaceComponent
							interFace={interFace}
							onClickShoot={onClickShoot}
							account={account}
							Contract={Contract}
						/>
					)}
					{resultState && (
						<ResultComponent
							setResultState={setResultState}
							setIsDepositing={setIsDepositing}
							result={result}
							account={account}
							Contract={Contract}
						/>
					)}
					{goalSavedState && (
						<GoalSaved
							playerScore={playerScore}
							computerScore={computerScore}
							shootNumber={shootNumber}
							currentPlayerState={currentPlayerState}
							setResult={setResult}
							setGoalSavedState={setGoalSavedState}
							setResultState={setResultState}
							setInterfaceState={setInterfaceState}
						/>
					)}
					{goalScoredState && (
						<GoalScored
							playerScore={playerScore}
							computerScore={computerScore}
							shootNumber={shootNumber}
							currentPlayerState={currentPlayerState}
							setResult={setResult}
							setResultState={setResultState}
							setInterfaceState={setInterfaceState}
							setGoalScoredState={setGoalScoredState}
						/>
					)}
					{isDepositing && <Deposited />}
				</StyledDCerten>
				<StyledDivScore>
					<ScoreComponent
						playerScoreRecord={playerScoreRecord}
						computerScoreRecord={computerScoreRecord}
					/>
				</StyledDivScore>
			</div>
			<StyledDiv>
				<StyledH1>AI Cards</StyledH1>
				<StyledDivImg>
					<StyledImg src={p0} />
					<StyledImg src={p8} />
					<StyledImg src={p10} />
					<StyledImg src={p4} />
					<StyledImg src={p6} />
				</StyledDivImg>
			</StyledDiv>
		</div>
	)
}
