import HomeHeader from "./HomeHeader"
import styled from "styled-components"
import backgroundImage from "../assets/landingBg2.png"
import title from "../assets/title.png"
import Image from "./Image"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const StyledAppLayout = styled.div`
	padding: 0.8rem 0;
`
const Container = styled.div`
	margin-left: 1.5rem; // ml-6
	height: 260px; // h-[260px]
	display: flex; // flex
	flex-direction: column; // flex-col
	justify-content: flex-end; // justify-end
	padding-bottom: 1rem;
`

const CenteredContainer = styled.div`
	font-family: "Orbitron", sans-serif; // font-Orbitron
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	position: relative; // 添加这一行，设置定位方式为相对定位
	top: 3rem;
`
const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
`

const BackgroundImageContainer = styled.div`
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 100vh; // 设置高度为全屏
	width: 100vw; // 设置宽度为全屏
`

export default function HomeLayOut() {
	const navagate = useNavigate()

	function handleJoin() {
		navagate("/game")
	}

	return (
		<BackgroundImageContainer>
			<StyledAppLayout>
				<HomeHeader />
			</StyledAppLayout>
			<Container>
				<ImageContainer>
					<Image src={title} width="1000px" height="200px" />
				</ImageContainer>

				<CenteredContainer>
					<Button variation="joinBt" size="medium" onClick={handleJoin}>
						Join Now
					</Button>
				</CenteredContainer>
			</Container>
		</BackgroundImageContainer>
	)
}
