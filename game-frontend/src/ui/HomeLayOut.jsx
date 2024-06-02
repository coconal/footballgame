import HomeHeader from "./HomeHeader"
import styled from "styled-components"
import title from "../assets/title.png"
import Image from "./Image"
import Button from "./Button"

import Spinner from "./Spinner"
import { useWeb3 } from "../context/Web3Provider"
import useGetJoinStatus from "../features/home/useGetJoinStatus"

import { useNavigate } from "react-router-dom"
import { useSignUp } from "../features/home/useSignUp"

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

export default function HomeLayOut() {
	const { isConnected, account, Contract } = useWeb3()
	const { isLoading: isLoadingJoin, joinStatus } = useGetJoinStatus({ account })
	const { isLoading: isLoadingSignUp, signUp } = useSignUp({ Contract })
	const navagate = useNavigate()
	if (isConnected) {
		if (isLoadingJoin || isLoadingSignUp) {
			return <Spinner />
		}
	}
	function handleJoin() {
		if (!isConnected) {
			return
		}
		if (isConnected && !joinStatus) {
			const receipt = signUp()
			console.log(receipt)
		}
		if (joinStatus && isConnected) {
			navagate("/game")
		}
	}

	return (
		<>
			<StyledAppLayout>
				<HomeHeader />
			</StyledAppLayout>
			<Container>
				<ImageContainer>
					<Image src={title} width="1000px" height="200px" />
				</ImageContainer>

				<CenteredContainer>
					<Button
						variation="joinBt"
						size="medium"
						onClick={handleJoin}
						disabled={!isConnected && !joinStatus}
					>
						{isConnected && joinStatus && "Play"}
						{isConnected && !joinStatus && "Join"}
						{!isConnected && !joinStatus && "Please Connect Wallet"}
					</Button>
				</CenteredContainer>
			</Container>
		</>
	)
}
