import HomeLayOut from "../ui/HomeLayOut"
import styled from "styled-components"

import backgroundImage from "../assets/landingBg2.png"

const BackgroundImageContainer = styled.div`
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	height: 100vh; // 设置高度为全屏
	width: 100vw; // 设置宽度为全屏
`

export default function Home() {
	return (
		<BackgroundImageContainer>
			<HomeLayOut />
		</BackgroundImageContainer>
	)
}
