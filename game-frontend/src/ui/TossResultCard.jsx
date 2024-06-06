import styled from "styled-components"

import TossWinCard from "./TossWinCard"
import TossLostCard from "./TossLostCard"

const StyledDiv = styled.div`
	color: black;
	font-weight: medium;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100px;
	width: 520px;
	border-radius: 2rem;
`

export default function TossResultCard({
	tossWin,
	setGameState,
	setTossState,
	setCurrentPlayerState,
}) {
	return (
		<StyledDiv>
			{tossWin && (
				<TossWinCard
					setGameState={setGameState}
					setTossState={setTossState}
					setCurrentPlayerState={setCurrentPlayerState}
				/>
			)}
			{!tossWin && (
				<TossLostCard
					setGameState={setGameState}
					setTossState={setTossState}
					setCurrentPlayerState={setCurrentPlayerState}
				/>
			)}
		</StyledDiv>
	)
}
