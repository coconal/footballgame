import styled from "styled-components"
import ReactPlayer from "react-player"
import goalSavedVideo from "../assets/videos/save.mp4"
import { getRoundNumber } from "../features/testing/getRoundNumber"
import { useCheckResult } from "../features/testing/useCheckResult"
import Spinner from "./Spinner"

const PlayerWrapper = styled.div`
	height: 400px;
	width: 800px;
`

const GoalSaved = ({
	playerScore,
	computerScore,
	shootNumber,
	currentPlayerState,
	setResult,
	setGoalSavedState,
	setResultState,
	setInterfaceState,
}) => {
	const { isLoading: isLoading1, roundnum } = getRoundNumber()
	const { isLoading: isLoading2, checkResult } = useCheckResult({
		playerScore,
		computerScore,
		shootNumber,
		currentPlayerState,
	})

	if (isLoading1 || isLoading2) return <Spinner />

	function onSaveEnded() {
		console.log(`Round is ${roundnum}`)
		console.log(playerScore, computerScore)
		console.log(checkResult)

		setResult({ value: Number(checkResult) })
		console.log(`Round check result is ${checkResult.value}`)
		setGoalSavedState(false)
		if (Number(checkResult) !== 0) {
			setResultState(true)
		} else {
			setInterfaceState(true)
			// setGoalSavedState(false)
		}
	}

	return (
		<PlayerWrapper>
			<ReactPlayer
				height="100%"
				width="100%"
				url={goalSavedVideo}
				playing
				muted
				onEnded={onSaveEnded}
			/>
		</PlayerWrapper>
	)
}

export default GoalSaved
