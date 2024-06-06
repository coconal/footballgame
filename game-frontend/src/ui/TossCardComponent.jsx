import { useWeb3 } from "../context/Web3Provider"
import styled from "styled-components"
import { useCallToss } from "../features/testing/useCallToss"
import Spinner from "./Spinner"

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 400px;
`

const StyledH1 = styled.h1`
	margin-bottom: 40px;
	font-size: 3rem;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	background-image: linear-gradient(to left, blue, red);
	font-weight: bold;
`

const Styledbutton = styled.button`
	margin: 4px;
	color: black;
	font-weight: medium;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 100px;
	background: linear-gradient(to left, blue, red);
	border-radius: 2rem;
`

export default function TossCardComponent({
	setTossCardState,
	setTossResultCardState,
	setTossWin,
}) {
	const { account, Contract } = useWeb3()

	const { isLoading, getWinorLoss } = useCallToss({ Contract })

	if (isLoading)
		return (
			<StyledDiv>
				<Spinner />
			</StyledDiv>
		)
	const onclickHeadsHandler = async () => {
		setTossCardState(false)
		const winorloss = getWinorLoss(
			{ choice: 0 },
			{
				onSuccess: (data) => {
					console.log(data)
					setTossWin(data), setTossResultCardState(true), setTossCardState(false)
				},
			}
		)

		if (winorloss === undefined) {
			setTossCardState(true)
			setTossResultCardState(false)
		}
	}

	const onclickTailsHandler = async () => {
		setTossCardState(false)
		const winorloss = getWinorLoss(
			{ choice: 1 },
			{
				onSuccess: (data) => {
					console.log(data)
					setTossWin(data), setTossResultCardState(true), setTossCardState(false)
				},
			}
		)
		if (winorloss === undefined) {
			setTossCardState(true)
			setTossResultCardState(false)
		}
	}

	return (
		<StyledDiv>
			<div>
				<StyledH1></StyledH1>
			</div>
			<div style={{ display: "flex" }}>
				<Styledbutton onClick={onclickHeadsHandler}>Heads</Styledbutton>

				<Styledbutton onClick={onclickTailsHandler}>Tails</Styledbutton>
			</div>
		</StyledDiv>
	)
}
