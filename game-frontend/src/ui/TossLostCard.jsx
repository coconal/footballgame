import styled from "styled-components"

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 288px;
`

const StyledDivFont = styled.div`
	margin-bottom: 40px;
	font-size: 2rem;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	background-image: linear-gradient(to left, blue, red);
	font-weight: bold;
`

const StyledButton = styled.button`
	margin: 4px;
	color: black;
	font-size: small;
	font-weight: medium;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 100px;
	background: linear-gradient(to left, blue, red);
	border-radius: 2rem;
`

export default function TossLostCard({ setGameState, setTossState, setCurrentPlayerState }) {
	const onContinueHandler = () => {
		setCurrentPlayerState(1)
		setTossState(false)
		setGameState(true)
	}
	return (
		<StyledDiv>
			<StyledDivFont>You have lost the toss</StyledDivFont>
			<StyledButton onClick={onContinueHandler}>Continue</StyledButton>
		</StyledDiv>
	)
}
