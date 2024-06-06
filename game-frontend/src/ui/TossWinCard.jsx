import styled from "styled-components"

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 400px;
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

export default function TossWinCard({ setGameState, setTossState, setCurrentPlayerState }) {
	const onShootFirstHandler = () => {
		setCurrentPlayerState(2)
		setGameState(true)
		setTossState(false)
	}
	const onShootSecondHandler = () => {
		setCurrentPlayerState(1)
		setGameState(true)
		setTossState(false)
	}

	return (
		<StyledDiv>
			<StyledDivFont>You have won the toss!</StyledDivFont>
			<div style={{ display: "flex" }}>
				<StyledButton onClick={onShootFirstHandler}>Shoot First</StyledButton>
				<StyledButton onClick={onShootSecondHandler}>Save First</StyledButton>
			</div>
		</StyledDiv>
	)
}
