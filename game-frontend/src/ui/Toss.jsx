import { useState } from "react"
import styled from "styled-components"
import TossCardComponent from "./TossCardComponent"
import TossResultCard from "./TossResultCard"

const StyledDiv = styled.div`
	width: 100%;
	height: 400px;
	background: rgba(0, 0, 0, 0.5);
`

export default function Toss({ setGameState, setTossState, setCurrentPlayerState }) {
	const [tossCardState, setTossCardState] = useState(true)
	const [tossResultCardState, setTossResultCardState] = useState(false)
	const [tossWin, setTossWin] = useState(false)

	return (
		<StyledDiv>
			{tossCardState && (
				<TossCardComponent
					setTossCardState={setTossCardState}
					setTossWin={setTossWin}
					setTossResultCardState={setTossResultCardState}
				></TossCardComponent>
			)}
			{tossResultCardState && (
				<TossResultCard
					tossWin={tossWin}
					setGameState={setGameState}
					setTossState={setTossState}
					setCurrentPlayerState={setCurrentPlayerState}
				/>
			)}
		</StyledDiv>
	)
}
