import styled from "styled-components"
import greenBall from "../assets/greenBall.png"
import redBall from "../assets/redBall.png"

const StyledDiv = styled.div`
	width: 600px;
	height: 30px;
	/* background: linear-gradient(to left, blue, #4548d3); */
	background-size: 80%;
	margin-top: 4px;
	/* display: flex; */
	flex-direction: column;
	border: 4px solid;
	gap: 15rem;
	border-image: linear-gradient(to left, blue, #4548d3);
	justify-content: center;
`

const StyledDivS = styled.div`
	display: flex;
	align-items: center;
`

const StyledH1 = styled.h1`
	font-family: "Orbitron", sans-serif;
	letter-spacing: wider;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	background-image: linear-gradient(to left, #c2963d, #ebb990);
`

const StyledImg = styled.img`
	width: 50px;
	margin-left: 16px;
`

export default function ScoreComponent({ playerScoreRecord, computerScoreRecord }) {
	return (
		<StyledDiv>
			<StyledDivS>
				<StyledH1>Player:</StyledH1>
				{playerScoreRecord?.map((item, index) => {
					if (item === 0) {
						return <StyledImg src={redBall} key={index} />
					} else {
						return <StyledImg src={greenBall} key={index} />
					}
				})}
			</StyledDivS>
			<StyledDivS>
				<StyledH1>AI:</StyledH1>
				{computerScoreRecord?.map((item, index) => {
					if (item === 0) {
						return <StyledImg src={redBall} key={index} />
					} else {
						return <StyledImg src={greenBall} key={index} />
					}
				})}
			</StyledDivS>
		</StyledDiv>
	)
}
