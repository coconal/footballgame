import styled from "styled-components"
import { Link } from "react-router-dom"
import { useWonPoints } from "../features/testing/useWonPoints"
import Spinner from "./Spinner"
import toast from "react-hot-toast"

const ResultWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 400px;
	background: rgba(0, 0, 0, 0.7);
`

const ResultMessage = styled.div`
	margin-bottom: 40px;
	font-size: 3rem;
	background-clip: text;
	color: transparent;
	background-image: linear-gradient(to left, blue, red);
	font-weight: bold;
`

const ResultButton = styled.button`
	margin: 4px;
	color: black;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 300px;
	background-image: linear-gradient(to left, blue, red);
	border-radius: 20px;
`

const ResultLink = styled(Link)`
	margin: 4px;
	color: black;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 120px;
	background-image: linear-gradient(to left, blue, red);
	border-radius: 20px;
`

const ResultComponent = ({ setResultState, setIsDepositing, result, account, Contract }) => {
	const { isLoading, wonPoints } = useWonPoints({ Contract, setIsDepositing })
	// console.log(account, Contract)
	if (isLoading) {
		return (
			<ResultWrapper>
				<Spinner />
			</ResultWrapper>
		)
	}

	function handleClick() {
		setResultState(false)
		wonPoints({ account })
	}

	if (result.value === 1) {
		return (
			<ResultWrapper>
				<ResultMessage>You won!</ResultMessage>
				<ResultButton onClick={handleClick}>
					<h1>Collect points</h1>
				</ResultButton>
			</ResultWrapper>
		)
	} else {
		return (
			<ResultWrapper>
				<ResultMessage>Sorry, You lost!</ResultMessage>
				<ResultLink to={"/"}>
					<h1>Return</h1>
				</ResultLink>
			</ResultWrapper>
		)
	}
}

export default ResultComponent
