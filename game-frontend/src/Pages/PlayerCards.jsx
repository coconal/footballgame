import CardLayOut from "../ui/CardLayOut"
import styled from "styled-components"
import backgroundImage from "../assets/pg.png"

const BackgroundImageContainer = styled.div`
	background-image: url(${backgroundImage});
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export default function PlayerCards() {
	return (
		<BackgroundImageContainer>
			<CardLayOut />
		</BackgroundImageContainer>
	)
}
