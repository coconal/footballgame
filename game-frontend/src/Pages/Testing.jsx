import { useState } from "react"
import { useWeb3 } from "../context/Web3Provider"

import StartComponent from "../ui/StartComponet"
import Spinner from "../ui/Spinner"

import styled from "styled-components"

import backgroundImage from "../assets/bg.png"
import { useGetsendQuestEvent } from "../features/testing/useGetsendQuestEvent"
import VideoComponent from "../ui/VideoComponent"
import Toss from "../ui/Toss"
import GameComponent from "../ui/GameComponent"

const BackgroundImageContainer = styled.div`
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	height: 100vh; // 设置高度为全屏
	width: 100vw; // 设置宽度为全屏
`
const StyledDiv = styled.div`
	font-family: "Orbitron", sans-serif;
	letter-spacing: wider;
	background: url("your-background-image-url") no-repeat center center / cover;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledPlayer = styled.div`
	width: 600px;
	border: 8px solid;
	border-image: linear-gradient(to left, blue, red) 1;
	border-radius: 1rem;
`

const StyledToss = styled.div`
	width: 500px;
	border: 8px solid;
	border-image: linear-gradient(to left, blue, red) 1;
	border-radius: 1rem;
`

export default function Testing() {
	const [introVideoState, setIntroVideoState] = useState(false)
	const [tossState, setTossState] = useState(false)
	const [gameState, setGameState] = useState(false)
	const [currentPlayerState, setCurrentPlayerState] = useState(0)
	const [start, setStart] = useState(true)
	const [loading, setLoading] = useState(false)

	const { account, Contract } = useWeb3()

	const { isLoading: isLoadingEvent, sendrequestevent } = useGetsendQuestEvent()

	if (isLoadingEvent)
		return (
			<BackgroundImageContainer>
				<Spinner />
			</BackgroundImageContainer>
		)
	// console.log(sendrequestevent[0].args[0])   //type of bigNumber
	// console.log(start)
	return (
		<BackgroundImageContainer>
			<StyledDiv>
				{start && (
					<StartComponent
						setStart={setStart}
						setLoading={setLoading}
						setIntroVideoState={setIntroVideoState}
						Contract={Contract}
					/>
				)}
				{loading && <Spinner />}
				{introVideoState && (
					<StyledPlayer>
						<VideoComponent setIntroVideoState={setIntroVideoState} setTossState={setTossState} />
					</StyledPlayer>
				)}
				{tossState && (
					<StyledToss>
						<Toss
							setGameState={setGameState}
							setTossState={setTossState}
							setCurrentPlayerState={setCurrentPlayerState}
						/>
					</StyledToss>
				)}
				{gameState && (
					<GameComponent
						currentPlayerState={currentPlayerState}
						setCurrentPlayerState={setCurrentPlayerState}
					/>
				)}
			</StyledDiv>
		</BackgroundImageContainer>
	)
}
