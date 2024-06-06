import styled from "styled-components"

const StyledGameOpeningComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 400px;
	background: rgba(0, 0, 0, 0.5);
`

const StyledButton = styled.button`
	margin: 4px;
	color: black;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 100px;
	background: linear-gradient(to left, blue, red);
	border-radius: 1rem;
`

const GameOpeningComponent = ({ onClickLetsPlay }) => {
	return (
		<StyledGameOpeningComponent>
			<StyledButton onClick={onClickLetsPlay}> {"Let's Play"}</StyledButton>
		</StyledGameOpeningComponent>
	)
}

export default GameOpeningComponent
