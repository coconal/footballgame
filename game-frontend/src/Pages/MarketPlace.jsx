import styled from "styled-components"
import backgroundImage from "../assets/pg.png"

import MarketPlaceLayOut from "../ui/MarketPlaceLayOut"

const BackgroundImageContainer = styled.div`
	background-image: url(${backgroundImage});
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export default function MarketPlace() {
	return (
		<BackgroundImageContainer>
			<MarketPlaceLayOut />
		</BackgroundImageContainer>
	)
}
